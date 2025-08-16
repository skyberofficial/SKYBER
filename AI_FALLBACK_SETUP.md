# AI Chat Fallback System Setup

This document explains how to set up and use the new AI chat system with automatic fallback across multiple AI providers and models.

## Overview

The AI fallback system automatically switches between different AI models when the primary model is unavailable, ensuring high availability and reliability for your chat system. It supports multiple providers including NVIDIA, Google, Meta, Mistral, Microsoft, DeepSeek, and Qwen.

## Features

- **Automatic Fallback**: Seamlessly switches between models when one fails
- **Multiple Providers**: Support for 7 major AI providers
- **Priority-based Selection**: Models are tried in order of priority
- **Configurable Timeouts**: Each model has configurable timeout settings
- **Error Handling**: Graceful degradation with informative error messages
- **Model Status Monitoring**: API endpoint to check current model status

## Supported Models

### NVIDIA (Priority 1-4)
- `nvidia/llama-3.1-nemotron-ultra-253b-v1` - Ultra 253B model
- `nvidia/llama-3.1-nemotron-70b-instruct` - 70B instruction model
- `nvidia/llama-3.1-nemotron-51b-instruct` - 51B instruction model
- `nvidia/llama-3.3-nemotron-super-49b-v1.5` - Super 49B model

### Google (Priority 5-8)
- `google/gemma-2-27b-it` - Gemma 2 27B
- `google/gemma-2-9b-it` - Gemma 2 9B
- `google/gemma-3-27b-it` - Gemma 3 27B
- `google/gemma-3-12b-it` - Gemma 3 12B

### Meta (Priority 9-11)
- `meta/llama-3.1-405b-instruct` - Llama 3.1 405B
- `meta/llama-3.1-70b-instruct` - Llama 3.1 70B
- `meta/llama-3.2-90b-vision-instruct` - Llama 3.2 90B Vision

### Mistral (Priority 12-14)
- `mistralai/mistral-large-2-instruct` - Mistral Large 2
- `mistralai/mistral-large` - Mistral Large
- `mistralai/mixtral-8x22b-instruct-v0.1` - Mixtral 8x22B

### Microsoft (Priority 15-17)
- `microsoft/phi-4-mini-instruct` - Phi-4 Mini
- `microsoft/phi-3.5-mini-instruct` - Phi-3.5 Mini
- `microsoft/phi-3-medium-128k-instruct` - Phi-3 Medium 128K

### DeepSeek (Priority 18-19)
- `deepseek-ai/deepseek-r1` - DeepSeek R1
- `deepseek-ai/deepseek-coder-6.7b-instruct` - DeepSeek Coder 6.7B

### Qwen (Priority 20-21)
- `qwen/qwen3-235b-a22b` - Qwen 3 235B
- `qwen/qwen2.5-7b-instruct` - Qwen 2.5 7B

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in your API keys:

```bash
cp .env.example .env.local
```

Configure the following environment variables:

```env
# NVIDIA AI Platform
NVIDIA_API_KEY=your_nvidia_api_key_here
NVIDIA_BASE_URL=https://api.nvcf.nvidia.com/v1

# Google AI Platform
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_BASE_URL=https://generativelanguage.googleapis.com/v1

# Meta AI Platform
META_API_KEY=your_meta_api_key_here
META_BASE_URL=https://api.meta.ai/v1

# Mistral AI Platform
MISTRAL_API_KEY=your_mistral_api_key_here
MISTRAL_BASE_URL=https://api.mistral.ai/v1

# Microsoft Azure OpenAI
MICROSOFT_API_KEY=your_microsoft_api_key_here
MICROSOFT_BASE_URL=https://your-resource.openai.azure.com

# DeepSeek AI
DEEPSEEK_API_KEY=your_deepseek_api_key_here
DEEPSEEK_BASE_URL=https://api.deepseek.com/v1

# Qwen AI
QWEN_API_KEY=your_qwen_api_key_here
QWEN_BASE_URL=https://api.qwen.ai/v1
```

### 2. API Key Setup

#### NVIDIA
1. Visit [NVIDIA AI Foundation Models](https://www.nvidia.com/en-us/ai-data-science/foundation-models/)
2. Sign up for API access
3. Get your API key from the dashboard

#### Google
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Enable the Gemini API
3. Create API credentials

#### Meta
1. Visit [Meta AI Platform](https://ai.meta.com/)
2. Apply for API access
3. Get your API key

#### Mistral
1. Visit [Mistral AI](https://mistral.ai/)
2. Sign up for an account
3. Get your API key from the dashboard

#### Microsoft
1. Visit [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
2. Create a resource
3. Get your API key and endpoint

#### DeepSeek
1. Visit [DeepSeek](https://platform.deepseek.com/)
2. Sign up for an account
3. Get your API key

#### Qwen
1. Visit [Qwen AI](https://qwen.ai/)
2. Sign up for an account
3. Get your API key

### 3. Installation

The system is already integrated into your project. No additional installation is required.

## Usage

### Basic Chat

The chat API automatically uses the fallback system:

```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});

const data = await response.json();
console.log('Response:', data.content);
console.log('Model used:', data.model);
console.log('Provider:', data.provider);
```

### Preferred Model

You can specify a preferred model:

```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'Hello!' }],
    preferredModel: 'google/gemma-2-27b-it'
  })
});
```

### Model Information

Get information about available models:

```typescript
const response = await fetch('/api/ai-models');
const data = await response.json();
console.log('Available models:', data.data.models);
console.log('Current status:', data.data.status);
```

## How It Works

### 1. Model Selection
- If a preferred model is specified, it's tried first
- Otherwise, models are tried in priority order (lower number = higher priority)

### 2. Fallback Chain
- Each model is attempted with a 15-second timeout
- If a model fails, the system automatically moves to the next one
- Up to 3 models are tried before giving up

### 3. Response Handling
- Successful responses include the model and provider used
- Failed responses include error information
- Fallback responses are provided when all models fail

### 4. Error Recovery
- Network errors trigger automatic retry with next model
- API errors (rate limits, invalid keys) skip to next model
- Timeout errors move to next model

## Configuration

### Customizing Model Priorities

Edit `lib/ai-config.ts` to change model priorities:

```typescript
export const nvidiaProvider: AIProvider = {
  // ... other config
  models: [
    {
      id: 'nvidia/llama-3.1-nemotron-ultra-253b-v1',
      priority: 1, // Change this number to adjust priority
      // ... other properties
    }
  ]
};
```

### Adjusting Timeouts

Modify the timeout in `lib/ai-service.ts`:

```typescript
const completion = await Promise.race([
  openai.chat.completions.create({ /* ... */ }),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), 15000) // Change timeout here
  )
]);
```

### Changing Retry Count

Modify the max retries in `lib/ai-service.ts`:

```typescript
private maxRetries: number = 3; // Change this number
```

## Monitoring and Debugging

### API Endpoints

- `/api/chat` - Main chat endpoint with fallback
- `/api/ai-models` - Get model information and status

### Logging

The system logs all fallback attempts:

```
Attempting to use model: nvidia/llama-3.1-nemotron-ultra-253b-v1 (NVIDIA)
Successfully used model: nvidia/llama-3.1-nemotron-ultra-253b-v1 (NVIDIA)
```

### Error Handling

Common error scenarios and solutions:

1. **API Key Invalid**: Check your environment variables
2. **Rate Limit Exceeded**: The system automatically moves to the next model
3. **Network Timeout**: Models are tried with increasing timeouts
4. **Provider Unavailable**: Automatic fallback to next provider

## Performance Considerations

### Response Times
- Primary model: ~2-5 seconds
- Fallback models: ~3-8 seconds
- Total fallback chain: ~15-45 seconds

### Cost Optimization
- Models are tried in order of cost-effectiveness
- NVIDIA models are prioritized for performance
- Smaller models are used as fallbacks

### Caching
- Consider implementing response caching for common queries
- Cache successful model responses to avoid repeated API calls

## Troubleshooting

### Common Issues

1. **All models failing**
   - Check all API keys are valid
   - Verify network connectivity
   - Check provider service status

2. **Slow responses**
   - Reduce timeout values
   - Check network latency
   - Consider using smaller models

3. **Rate limiting**
   - Implement exponential backoff
   - Add request queuing
   - Use multiple API keys per provider

### Debug Mode

Enable detailed logging by setting environment variable:

```env
DEBUG_AI_FALLBACK=true
```

## Security Considerations

1. **API Key Management**
   - Never commit API keys to version control
   - Use environment variables or secure key management
   - Rotate keys regularly

2. **Rate Limiting**
   - Implement per-user rate limiting
   - Monitor API usage and costs
   - Set appropriate limits per model

3. **Input Validation**
   - Validate all user inputs
   - Implement content filtering
   - Monitor for abuse

## Support

For issues or questions:

1. Check the logs for error details
2. Verify API key configurations
3. Test individual providers separately
4. Check provider service status pages

## Future Enhancements

- [ ] Model performance metrics
- [ ] Automatic model selection based on query type
- [ ] Cost optimization algorithms
- [ ] Multi-region failover
- [ ] Model fine-tuning integration
- [ ] Real-time model availability monitoring
