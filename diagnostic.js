const OpenAI = require('openai');
const https = require('https');
require('dotenv').config({ path: '.env.local' });

console.log('🔍 NVIDIA API Diagnostic Test\n');

// Test 1: Check if we can reach the NVIDIA API endpoint
async function testNetworkConnectivity() {
  console.log('🌐 Testing Network Connectivity...');
  
  return new Promise((resolve) => {
    const url = new URL(process.env.NVIDIA_BASE_URL);
    
    const req = https.request({
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname,
      method: 'GET',
      timeout: 10000, // 10 second timeout
    }, (res) => {
      console.log('✅ Network: Can reach NVIDIA API endpoint');
      console.log('   Status:', res.statusCode);
      console.log('   Headers:', res.headers['content-type'] || 'No content-type');
      resolve(true);
    });
    
    req.on('error', (error) => {
      console.log('❌ Network: Cannot reach NVIDIA API endpoint');
      console.log('   Error:', error.message);
      resolve(false);
    });
    
    req.on('timeout', () => {
      console.log('⏰ Network: Request timed out');
      req.destroy();
      resolve(false);
    });
    
    req.end();
  });
}

// Test 2: Check API key format
function testAPIKeyFormat() {
  console.log('\n🔑 Testing API Key Format...');
  
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    console.log('❌ API Key: Not found in environment');
    return false;
  }
  
  if (apiKey.startsWith('nvapi-')) {
    console.log('✅ API Key: Format looks correct (starts with nvapi-)');
    console.log('   Length:', apiKey.length, 'characters');
    return true;
  } else {
    console.log('❌ API Key: Format looks incorrect');
    console.log('   Should start with "nvapi-"');
    return false;
  }
}

// Test 3: Try a very simple request with minimal parameters
async function testMinimalRequest() {
  console.log('\n🧪 Testing Minimal API Request...');
  
  try {
    const openai = new OpenAI({
      apiKey: process.env.NVIDIA_API_KEY,
      baseURL: process.env.NVIDIA_BASE_URL,
    });
    
    console.log('⏳ Sending minimal request (5 second timeout)...');
    
    const completion = await Promise.race([
      openai.chat.completions.create({
        model: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
        messages: [{ role: "user", content: "Hi" }],
        max_tokens: 5,
        temperature: 0,
        stream: false,
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('5 second timeout')), 5000)
      )
    ]);
    
    console.log('✅ Minimal Request: SUCCESS!');
    console.log('   Response:', completion.choices[0]?.message?.content);
    return true;
    
  } catch (error) {
    console.log('❌ Minimal Request: Failed');
    console.log('   Error:', error.message);
    return false;
  }
}

// Test 4: Check if it's a model access issue
async function testModelAccess() {
  console.log('\n📋 Testing Model Access...');
  
  try {
    const openai = new OpenAI({
      apiKey: process.env.NVIDIA_API_KEY,
      baseURL: process.env.NVIDIA_BASE_URL,
    });
    
    console.log('⏳ Checking available models (5 second timeout)...');
    
    const models = await Promise.race([
      openai.models.list(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('5 second timeout')), 5000)
      )
    ]);
    
    console.log('✅ Model Access: SUCCESS!');
    console.log('   Available models:', models.data.length);
    models.data.forEach(model => {
      console.log('     -', model.id);
    });
    return true;
    
  } catch (error) {
    console.log('❌ Model Access: Failed');
    console.log('   Error:', error.message);
    return false;
  }
}

// Run all diagnostic tests
async function runDiagnostics() {
  const results = {
    network: false,
    apiKey: false,
    minimalRequest: false,
    modelAccess: false
  };
  
  // Run tests
  results.network = await testNetworkConnectivity();
  results.apiKey = testAPIKeyFormat();
  results.minimalRequest = await testMinimalRequest();
  results.modelAccess = await testModelAccess();
  
  // Summary
  console.log('\n📊 Diagnostic Results:');
  console.log('Network Connectivity:', results.network ? '✅ PASS' : '❌ FAIL');
  console.log('API Key Format:', results.apiKey ? '✅ PASS' : '❌ FAIL');
  console.log('Minimal Request:', results.minimalRequest ? '✅ PASS' : '❌ FAIL');
  console.log('Model Access:', results.modelAccess ? '✅ PASS' : '❌ FAIL');
  
  console.log('\n💡 Analysis:');
  
  if (!results.network) {
    console.log('   • Network issue: Cannot reach NVIDIA API endpoint');
    console.log('   • Check your internet connection');
    console.log('   • Check if NVIDIA service is down');
  }
  
  if (!results.apiKey) {
    console.log('   • API key issue: Invalid or missing API key');
    console.log('   • Verify your .env.local file');
    console.log('   • Check if the key is still valid');
  }
  
  if (results.network && results.apiKey && !results.minimalRequest) {
    console.log('   • API issue: Network works but API calls fail');
    console.log('   • NVIDIA service might be overloaded');
    console.log('   • Try again later or contact NVIDIA support');
  }
  
  if (results.minimalRequest && !results.modelAccess) {
    console.log('   • Model access issue: API works but model unavailable');
    console.log('   • Check if you have access to the specific model');
    console.log('   • Verify your NVIDIA account permissions');
  }
  
  if (results.minimalRequest && results.modelAccess) {
    console.log('   • All tests passed! The API should work in your chat system');
    console.log('   • The timeout in your chat might be too short');
    console.log('   • Consider increasing the timeout to 20-30 seconds');
  }
}

runDiagnostics().catch(error => {
  console.error('💥 Diagnostic failed:', error);
});
