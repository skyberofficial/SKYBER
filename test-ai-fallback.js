// Test script for AI Fallback System
// Run with: node test-ai-fallback.js

const BASE_URL = 'http://localhost:3000'; // Adjust if your dev server runs on different port

async function testChatAPI() {
  console.log('🧪 Testing AI Chat Fallback System...\n');

  try {
    // Test 1: Basic chat without preferred model
    console.log('1️⃣ Testing basic chat (automatic fallback)...');
    const basicResponse = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Hello! What can you tell me about cybersecurity?' }]
      })
    });

    if (basicResponse.ok) {
      const data = await basicResponse.json();
      console.log('✅ Basic chat successful!');
      console.log(`   Response: ${data.content.substring(0, 100)}...`);
      console.log(`   Model used: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('❌ Basic chat failed:', basicResponse.status);
      const errorData = await basicResponse.json();
      console.log('   Error:', errorData.error || 'Unknown error\n');
    }

    // Test 2: Chat with preferred model
    console.log('2️⃣ Testing chat with preferred model...');
    const preferredResponse = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'What are the benefits of web development?' }],
        preferredModel: 'google/gemma-2-9b-it'
      })
    });

    if (preferredResponse.ok) {
      const data = await preferredResponse.json();
      console.log('✅ Preferred model chat successful!');
      console.log(`   Response: ${data.content.substring(0, 100)}...`);
      console.log(`   Model used: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('❌ Preferred model chat failed:', preferredResponse.status);
      const errorData = await preferredResponse.json();
      console.log('   Error:', errorData.error || 'Unknown error\n');
    }

    // Test 3: Get available models
    console.log('3️⃣ Testing models API...');
    const modelsResponse = await fetch(`${BASE_URL}/api/ai-models`);

    if (modelsResponse.ok) {
      const data = await modelsResponse.json();
      console.log('✅ Models API successful!');
      console.log(`   Total models: ${data.data.totalModels}`);
      console.log(`   Current model index: ${data.data.status.currentIndex}`);
      console.log(`   Available models: ${data.data.models.length}`);
      
      // Show first few models
      console.log('   Sample models:');
      data.data.models.slice(0, 5).forEach(model => {
        console.log(`     - ${model.name} (${model.provider}) - Priority: ${model.priority}`);
      });
      console.log('');
    } else {
      console.log('❌ Models API failed:', modelsResponse.status);
      const errorData = await modelsResponse.json();
      console.log('   Error:', errorData.error || 'Unknown error\n');
    }

    // Test 4: Error handling (invalid model)
    console.log('4️⃣ Testing error handling...');
    const errorResponse = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Test message' }],
        preferredModel: 'invalid/model-id'
      })
    });

    if (errorResponse.ok) {
      const data = await errorResponse.json();
      console.log('✅ Error handling test successful!');
      console.log(`   Response: ${data.content.substring(0, 100)}...`);
      console.log(`   Model used: ${data.model}`);
      console.log(`   Provider: ${data.provider}\n`);
    } else {
      console.log('✅ Error handling working correctly!');
      console.log(`   Status: ${errorResponse.status}`);
      const errorData = await errorResponse.json();
      console.log(`   Error message: ${errorData.error || 'No error message'}\n`);
    }

    console.log('🎉 All tests completed!');

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
    console.log('\n💡 Make sure your development server is running on port 3000');
    console.log('   Run: npm run dev');
  }
}

async function testModelFallback() {
  console.log('🔄 Testing model fallback behavior...\n');

  try {
    // Test with a message that might trigger fallback
    const response = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Can you explain quantum computing in simple terms?' }
        ]
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Fallback test successful!');
      console.log(`   Final model used: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Response length: ${data.content.length} characters`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('❌ Fallback test failed:', response.status);
      const errorData = await response.json();
      console.log('   Error:', errorData.error || 'Unknown error\n');
    }

  } catch (error) {
    console.error('❌ Fallback test error:', error.message);
  }
}

// Run tests
async function runAllTests() {
  await testChatAPI();
  console.log('='.repeat(50));
  await testModelFallback();
}

// Check if running in Node.js environment
if (typeof fetch === 'undefined') {
  console.log('⚠️  This script requires Node.js 18+ with fetch support');
  console.log('   Or install node-fetch: npm install node-fetch');
  process.exit(1);
}

// Run tests
runAllTests();
