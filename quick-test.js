const OpenAI = require('openai');
require('dotenv').config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: process.env.NVIDIA_BASE_URL,
});

async function quickTest() {
  console.log('🚀 Quick NVIDIA API Test...\n');
  
  try {
    console.log('⏳ Sending test request...');
    
    const completion = await openai.chat.completions.create({
      model: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
      messages: [{ role: "user", content: "Say 'Hello' in one word." }],
      max_tokens: 10,
      temperature: 0,
      stream: false,
    });
    
    console.log('✅ SUCCESS! API is working!');
    console.log('Response:', completion.choices[0]?.message?.content);
    console.log('Model:', completion.model);
    
  } catch (error) {
    console.log('❌ API Error:');
    console.log('Message:', error.message);
    console.log('Type:', error.constructor.name);
    
    if (error.status) console.log('Status:', error.status);
    if (error.code) console.log('Code:', error.code);
    
    // Check for common issues
    if (error.message.includes('timeout')) {
      console.log('\n💡 Issue: Request timed out - API might be slow');
    } else if (error.message.includes('401')) {
      console.log('\n💡 Issue: Unauthorized - Check your API key');
    } else if (error.message.includes('429')) {
      console.log('\n💡 Issue: Rate limited - Too many requests');
    } else if (error.message.includes('500')) {
      console.log('\n💡 Issue: Server error - NVIDIA service issue');
    }
  }
}

// Run with 15 second timeout
const timeout = setTimeout(() => {
  console.log('⏰ Test timed out after 15 seconds');
  process.exit(1);
}, 15000);

quickTest()
  .then(() => {
    clearTimeout(timeout);
    console.log('\n🎉 Test completed successfully!');
  })
  .catch(error => {
    clearTimeout(timeout);
    console.log('\n💥 Test failed:', error.message);
  });
