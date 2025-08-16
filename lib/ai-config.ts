export interface AIModel {
  id: string;
  name: string;
  provider: string;
  baseURL?: string;
  apiKey?: string;
  maxTokens: number;
  temperature: number;
  priority: number; // Lower number = higher priority
}

export interface AIProvider {
  name: string;
  baseURL: string;
  apiKey: string;
  models: AIModel[];
}

// Primary NVIDIA provider - Optimized for working models
export const nvidiaProvider: AIProvider = {
  name: 'NVIDIA',
  baseURL: process.env.NVIDIA_BASE_URL || 'https://api.nvcf.nvidia.com/v1',
  apiKey: process.env.NVIDIA_API_KEY || '',
  models: [
    {
      id: 'nvidia/llama-3.1-nemotron-ultra-253b-v1',
      name: 'Llama 3.1 Nemotron Ultra 253B',
      provider: 'NVIDIA',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 1
    },
    {
      id: 'nvidia/llama-3.1-nemotron-70b-instruct',
      name: 'Llama 3.1 Nemotron 70B',
      provider: 'NVIDIA',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 2
    },
    {
      id: 'nvidia/llama-3.1-nemotron-51b-instruct',
      name: 'Llama 3.1 Nemotron 51B',
      provider: 'NVIDIA',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 3
    },
    {
      id: 'nvidia/llama-3.3-nemotron-super-49b-v1.5',
      name: 'Llama 3.3 Nemotron Super 49B',
      provider: 'NVIDIA',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 4
    },
    {
      id: 'nvidia/llama-3.1-nemotron-nano-8b-v1',
      name: 'Llama 3.1 Nemotron Nano 8B',
      provider: 'NVIDIA',
      maxTokens: 4096,
      temperature: 0.7,
      priority: 5
    },
    {
      id: 'nvidia/llama-3.1-nemotron-nano-4b-v1.1',
      name: 'Llama 3.1 Nemotron Nano 4B',
      provider: 'NVIDIA',
      maxTokens: 4096,
      temperature: 0.7,
      priority: 6
    },
    {
      id: 'nvidia/llama-3.1-nemotron-70b-reward',
      name: 'Llama 3.1 Nemotron 70B Reward',
      provider: 'NVIDIA',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 7
    },
    {
      id: 'nvidia/llama-3.1-nemotron-51b-reward',
      name: 'Llama 3.1 Nemotron 51B Reward',
      provider: 'NVIDIA',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 8
    }
  ]
};

// Google models provider - Backup option
export const googleProvider: AIProvider = {
  name: 'Google',
  baseURL: process.env.GOOGLE_BASE_URL || 'https://generativelanguage.googleapis.com/v1',
  apiKey: process.env.GOOGLE_API_KEY || '',
  models: [
    {
      id: 'google/gemma-2-27b-it',
      name: 'Gemma 2 27B',
      provider: 'Google',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 20
    },
    {
      id: 'google/gemma-2-9b-it',
      name: 'Gemma 2 9B',
      provider: 'Google',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 21
    },
    {
      id: 'google/gemma-3-27b-it',
      name: 'Gemma 3 27B',
      provider: 'Google',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 22
    },
    {
      id: 'google/gemma-3-12b-it',
      name: 'Gemma 3 12B',
      provider: 'Google',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 23
    }
  ]
};

// Meta models provider - Backup option
export const metaProvider: AIProvider = {
  name: 'Meta',
  baseURL: process.env.META_BASE_URL || 'https://api.meta.ai/v1',
  apiKey: process.env.META_API_KEY || '',
  models: [
    {
      id: 'meta/llama-3.1-405b-instruct',
      name: 'Llama 3.1 405B',
      provider: 'Meta',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 30
    },
    {
      id: 'meta/llama-3.1-70b-instruct',
      name: 'Llama 3.1 70B',
      provider: 'Meta',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 31
    },
    {
      id: 'meta/llama-3.2-90b-vision-instruct',
      name: 'Llama 3.2 90B Vision',
      provider: 'Meta',
      maxTokens: 8192,
      temperature: 0.7,
      priority: 32
    }
  ]
};

// Mistral models provider - Backup option
export const mistralProvider: AIProvider = {
  name: 'Mistral',
  baseURL: process.env.MISTRAL_BASE_URL || 'https://api.mistral.ai/v1',
  apiKey: process.env.MISTRAL_API_KEY || '',
  models: [
    {
      id: 'mistralai/mistral-large-2-instruct',
      name: 'Mistral Large 2',
      provider: 'Mistral',
      maxTokens: 32768,
      temperature: 0.7,
      priority: 40
    },
    {
      id: 'mistralai/mistral-large',
      name: 'Mistral Large',
      provider: 'Mistral',
      maxTokens: 32768,
      temperature: 0.7,
      priority: 41
    },
    {
      id: 'mistralai/mixtral-8x22b-instruct-v0.1',
      name: 'Mixtral 8x22B',
      provider: 'Mistral',
      maxTokens: 32768,
      temperature: 0.7,
      priority: 42
    }
  ]
};

// Microsoft models provider - Backup option
export const microsoftProvider: AIProvider = {
  name: 'Microsoft',
  baseURL: process.env.MICROSOFT_BASE_URL || 'https://api.azure.com/v1',
  apiKey: process.env.MICROSOFT_API_KEY || '',
  models: [
    {
      id: 'microsoft/phi-4-mini-instruct',
      name: 'Phi-4 Mini',
      provider: 'Microsoft',
      maxTokens: 4096,
      temperature: 0.7,
      priority: 50
    },
    {
      id: 'microsoft/phi-3.5-mini-instruct',
      name: 'Phi-3.5 Mini',
      provider: 'Microsoft',
      maxTokens: 4096,
      temperature: 0.7,
      priority: 51
    },
    {
      id: 'microsoft/phi-3-medium-128k-instruct',
      name: 'Phi-3 Medium 128K',
      provider: 'Microsoft',
      maxTokens: 131072,
      temperature: 0.7,
      priority: 52
    }
  ]
};

// DeepSeek models provider - Backup option
export const deepseekProvider: AIProvider = {
  name: 'DeepSeek',
  baseURL: process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  models: [
    {
      id: 'deepseek-ai/deepseek-r1',
      name: 'DeepSeek R1',
      provider: 'DeepSeek',
      maxTokens: 32768,
      temperature: 0.7,
      priority: 60
    },
    {
      id: 'deepseek-ai/deepseek-coder-6.7b-instruct',
      name: 'DeepSeek Coder 6.7B',
      provider: 'DeepSeek',
      maxTokens: 16384,
      temperature: 0.7,
      priority: 61
    }
  ]
};

// Qwen models provider - Backup option
export const qwenProvider: AIProvider = {
  name: 'Qwen',
  baseURL: process.env.QWEN_BASE_URL || 'https://api.qwen.ai/v1',
  apiKey: process.env.QWEN_API_KEY || '',
  models: [
    {
      id: 'qwen/qwen3-235b-a22b',
      name: 'Qwen 3 235B',
      provider: 'Qwen',
      maxTokens: 32768,
      temperature: 0.7,
      priority: 70
    },
    {
      id: 'qwen/qwen2.5-7b-instruct',
      name: 'Qwen 2.5 7B',
      provider: 'Qwen',
      maxTokens: 32768,
      temperature: 0.7,
      priority: 71
    }
  ]
};

// All providers in priority order
export const allProviders: AIProvider[] = [
  nvidiaProvider,
  googleProvider,
  metaProvider,
  mistralProvider,
  microsoftProvider,
  deepseekProvider,
  qwenProvider
];

// Get all models sorted by priority
export const getAllModels = (): AIModel[] => {
  return allProviders
    .flatMap(provider => provider.models)
    .sort((a, b) => a.priority - b.priority);
};

// Get provider by model ID
export const getProviderByModelId = (modelId: string): AIProvider | null => {
  return allProviders.find(provider => 
    provider.models.some(model => model.id === modelId)
  ) || null;
};

// Get model by ID
export const getModelById = (modelId: string): AIModel | null => {
  return getAllModels().find(model => model.id === modelId) || null;
};
