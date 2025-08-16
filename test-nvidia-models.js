// Test script for NVIDIA AI Models Fallback System
// Run with: node test-nvidia-models.js

const BASE_URL = 'http://localhost:3000'; // Adjust if your dev server runs on different port

async function testNvidiaModels() {
  console.log('🔵 Testing NVIDIA AI Models Fallback System...\n');

  try {
    // Test 1: Get NVIDIA model information
    console.log('1️⃣ Testing NVIDIA Models API...');
    const modelsResponse = await fetch(`${BASE_URL}/api/ai-models`);

    if (modelsResponse.ok) {
      const data = await modelsResponse.json();
      console.log('✅ NVIDIA Models API successful!');
      console.log(`   Total models: ${data.data.totalModels}`);
      console.log(`   NVIDIA models: ${data.data.nvidiaStatus.totalNvidiaModels}`);
      console.log(`   Backup models: ${data.data.backupModels.length}`);
      
      // Show NVIDIA models
      console.log('\n🔵 NVIDIA Models (Priority Order):');
      data.data.nvidiaModels.forEach(model => {
        console.log(`   ${model.priority}. ${model.name} (${model.id})`);
      });
      
      // Show backup models
      console.log('\n🟡 Backup Models (Other Providers):');
      data.data.backupModels.slice(0, 5).forEach(model => {
        console.log(`   ${model.priority}. ${model.name} (${model.provider})`);
      });
      console.log('');
    } else {
      console.log('❌ NVIDIA Models API failed:', modelsResponse.status);
      return;
    }

    // Test 2: Test Ultra 253B model (Priority 1)
    console.log('2️⃣ Testing Ultra 253B model (Priority 1)...');
    const ultraResponse = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'What makes NVIDIA AI models special?' }],
        preferredModel: 'nvidia/llama-3.1-nemotron-ultra-253b-v1'
      })
    });

    if (ultraResponse.ok) {
      const data = await ultraResponse.json();
      console.log('✅ Ultra 253B test successful!');
      console.log(`   Model used: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Response length: ${data.content.length} characters`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('⚠️ Ultra 253B failed, this is expected if not configured');
      const errorData = await ultraResponse.json();
      console.log(`   Status: ${ultraResponse.status}`);
      console.log(`   Error: ${errorData.error || 'No error message'}\n`);
    }

    // Test 3: Test 70B model (Priority 2) - Known working model
    console.log('3️⃣ Testing 70B model (Priority 2) - Known working...');
    const seventyResponse = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Explain cybersecurity best practices for businesses.' }],
        preferredModel: 'nvidia/llama-3.1-nemotron-70b-instruct'
      })
    });

    if (seventyResponse.ok) {
      const data = await seventyResponse.json();
      console.log('✅ 70B model test successful!');
      console.log(`   Model used: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Response length: ${data.content.length} characters`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('❌ 70B model failed:', seventyResponse.status);
      const errorData = await seventyResponse.json();
      console.log(`   Error: ${errorData.error || 'Unknown error'}\n`);
    }

    // Test 4: Test automatic fallback without preferred model
    console.log('4️⃣ Testing automatic NVIDIA fallback...');
    const fallbackResponse = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'What are the latest trends in AI technology?' }]
      })
    });

    if (fallbackResponse.ok) {
      const data = await fallbackResponse.json();
      console.log('✅ Automatic fallback successful!');
      console.log(`   Model used: ${data.model}`);
      console.log(`   Provider: ${data.provider}`);
      console.log(`   Response length: ${data.content.length} characters`);
      console.log(`   Success: ${data.success}\n`);
    } else {
      console.log('❌ Automatic fallback failed:', fallbackResponse.status);
      const errorData = await fallbackResponse.json();
      console.log(`   Error: ${errorData.error || 'Unknown error'}\n`);
    }

    // Test 5: Test multiple NVIDIA models in sequence
    console.log('5️⃣ Testing NVIDIA model sequence...');
    const nvidiaModels = [
      'nvidia/llama-3.1-nemotron-ultra-253b-v1',
      'nvidia/llama-3.1-nemotron-70b-instruct',
      'nvidia/llama-3.1-nemotron-51b-instruct',
      'nvidia/llama-3.3-nemotron-super-49b-v1.5'
    ];

    for (let i = 0; i < Math.min(3, nvidiaModels.length); i++) {
      const modelId = nvidiaModels[i];
      console.log(`   Testing ${modelId}...`);
      
      try {
        const response = await fetch(`${BASE_URL}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [{ role: 'user', content: 'Hello! How are you today?' }],
            preferredModel: modelId
          })
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`   ✅ ${modelId} - Success! Model: ${data.model}`);
        } else {
          console.log(`   ⚠️ ${modelId} - Failed (expected if not configured)`);
        }
      } catch (error) {
        console.log(`   ❌ ${modelId} - Error: ${error.message}`);
      }
    }

    console.log('\n🎉 NVIDIA Models Testing Completed!');

  } catch (error) {
    console.error('❌ NVIDIA Models test failed with error:', error.message);
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

// Run NVIDIA-specific tests
testNvidiaModels();
