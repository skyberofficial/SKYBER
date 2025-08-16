// Test script for timeout fixes
// Run with: node test-timeout-fix.js

const BASE_URL = 'http://localhost:3000';

async function testTimeoutFix() {
  console.log('⏱️ Testing timeout fixes...\n');

  try {
    // Test 1: Quick response test
    console.log('1️⃣ Testing quick response...');
    const startTime = Date.now();
    
    const response = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Hello!' }]
      })
    });

    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    console.log(`   Response time: ${responseTime}ms`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Response successful!');
      console.log(`   Content: ${data.content.substring(0, 100)}...`);
      console.log(`   Model: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('❌ Response failed:', response.status);
      const errorData = await response.json();
      console.log(`   Error: ${errorData.error || 'Unknown error'}\n`);
    }

    // Test 2: Test with longer message
    console.log('2️⃣ Testing with longer message...');
    const startTime2 = Date.now();
    
    const response2 = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ 
          role: 'user', 
          content: 'Can you explain cybersecurity best practices for a small business? I need detailed information about protecting against common threats like phishing, malware, and data breaches.' 
        }]
      })
    });

    const endTime2 = Date.now();
    const responseTime2 = endTime2 - startTime2;
    
    console.log(`   Response time: ${responseTime2}ms`);
    
    if (response2.ok) {
      const data = await response2.json();
      console.log('✅ Long message response successful!');
      console.log(`   Content length: ${data.content.length} characters`);
      console.log(`   Model: ${data.model}`);
      console.log(`   Provider: ${data.provider}\n`);
    } else {
      console.log('❌ Long message response failed:', response2.status);
      const errorData = await response2.json();
      console.log(`   Error: ${errorData.error || 'Unknown error'}\n`);
    }

    // Test 3: Test fallback behavior
    console.log('3️⃣ Testing fallback behavior...');
    const startTime3 = Date.now();
    
    const response3 = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ 
          role: 'user', 
          content: 'What are the latest trends in artificial intelligence and machine learning?' 
        }]
      })
    });

    const endTime3 = Date.now();
    const responseTime3 = endTime3 - startTime3;
    
    console.log(`   Response time: ${responseTime3}ms`);
    
    if (response3.ok) {
      const data = await response3.json();
      console.log('✅ Fallback test successful!');
      console.log(`   Content: ${data.content.substring(0, 100)}...`);
      console.log(`   Model: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('❌ Fallback test failed:', response3.status);
      const errorData = await response3.json();
      console.log(`   Error: ${errorData.error || 'Unknown error'}\n`);
    }

    console.log('🎉 Timeout fix testing completed!');
    console.log(`   Average response time: ${Math.round((responseTime + responseTime2 + responseTime3) / 3)}ms`);

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
    console.log('\n💡 Make sure your development server is running on port 3000');
    console.log('   Run: npm run dev');
  }
}

// Check if running in Node.js environment
if (typeof fetch === 'undefined') {
  console.log('⚠️  This script requires Node.js 18+ with fetch support');
  console.log('   Or install node-fetch: npm install node-fetch');
  process.exit(1);
}

// Run timeout fix tests
testTimeoutFix();
