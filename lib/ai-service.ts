import OpenAI from 'openai';
import { 
  AIModel, 
  AIProvider, 
  getAllModels, 
  getProviderByModelId, 
  getModelById 
} from './ai-config';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  content: string;
  model: string;
  provider: string;
  success: boolean;
  error?: string;
}

export class AIService {
  private models: AIModel[];
  private currentModelIndex: number = 0;
  private maxRetries: number = 3; // Reduced for faster fallback
  private nvidiaModels: AIModel[];

  constructor() {
    this.models = getAllModels();
    // Get NVIDIA models specifically for optimization
    this.nvidiaModels = this.models.filter(model => model.provider === 'NVIDIA');
  }

  // Get the next available model for fallback
  private getNextModel(): AIModel | null {
    if (this.currentModelIndex >= this.models.length) {
      return null;
    }
    return this.models[this.currentModelIndex];
  }

  // Move to next model for fallback
  private moveToNextModel(): void {
    this.currentModelIndex++;
  }

  // Reset to first model
  private resetToFirstModel(): void {
    this.currentModelIndex = 0;
  }

  // Create OpenAI client for a specific provider
  private createOpenAIClient(provider: AIProvider): OpenAI {
    return new OpenAI({
      apiKey: provider.apiKey,
      baseURL: provider.baseURL,
    });
  }

  // Try to get a response from a specific model
  private async tryModel(
    model: AIModel, 
    messages: ChatMessage[], 
    systemPrompt: string
  ): Promise<ChatResponse> {
    try {
      const provider = getProviderByModelId(model.id);
      if (!provider || !provider.apiKey) {
        throw new Error(`Provider ${provider?.name || 'Unknown'} not configured`);
      }

      const openai = this.createOpenAIClient(provider);
      
      // Log attempt with priority information
      console.log(`🔄 Attempting model: ${model.id} (${model.provider}) - Priority: ${model.priority}`);
      
      // Reduced timeout for faster fallback - 10 seconds for NVIDIA, 8 seconds for others
      const timeoutMs = model.provider === 'NVIDIA' ? 10000 : 8000;
      
      const completion = await Promise.race([
        openai.chat.completions.create({
          model: model.id,
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages
          ],
          temperature: model.temperature,
          max_tokens: Math.min(model.maxTokens, 2048), // Limit tokens for faster response
          stream: false, // For fallback, use non-streaming for reliability
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error(`Request timed out after ${timeoutMs}ms`)), timeoutMs)
        )
      ]);

      const content = completion.choices[0]?.message?.content || '';
      
      console.log(`✅ Successfully used model: ${model.id} (${model.provider}) - Priority: ${model.priority}`);
      
      return {
        content,
        model: model.id,
        provider: provider.name,
        success: true
      };

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`❌ Error with model ${model.id} (${model.provider}): ${errorMessage}`);
      
      // Check if it's a timeout error
      if (errorMessage.includes('timeout') || errorMessage.includes('Timeout')) {
        return {
          content: '',
          model: model.id,
          provider: model.provider,
          success: false,
          error: 'Request timed out. Please try again.'
        };
      }
      
      return {
        content: '',
        model: model.id,
        provider: model.provider,
        success: false,
        error: errorMessage
      };
    }
  }

  // Simple fallback responses for common queries
  private getFallbackResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm LUMI, your AI Security Assistant. I'm currently experiencing some technical difficulties, but I'm here to help with cybersecurity, web development, and technology questions. Please try again in a moment for a full AI response.";
    }
    
    // Cybersecurity responses
    if (message.includes('cyber') || message.includes('security') || message.includes('hack') || message.includes('virus')) {
      return "I'd be happy to help with cybersecurity questions! I'm currently experiencing some technical difficulties, but I can provide general guidance: Always keep software updated, use strong passwords, enable 2FA, and be cautious with suspicious emails. Please try again in a moment for detailed AI-powered advice.";
    }
    
    // Web development responses
    if (message.includes('web') || message.includes('development') || message.includes('website') || message.includes('app')) {
      return "Great question about web development! I'm currently experiencing some technical difficulties, but I can share that modern web development typically involves React, Next.js, TypeScript, and responsive design principles. Please try again in a moment for comprehensive AI-powered guidance.";
    }
    
    // General help
    if (message.includes('help') || message.includes('what') || message.includes('how')) {
      return "I'm here to help! I'm currently experiencing some technical difficulties, but I'm your AI Security Assistant for SKYBER, specializing in cybersecurity, web development, app development, and tech consulting. Please try again in a moment for a full AI response.";
    }
    
    // Default fallback
    return "I apologize, but I'm currently experiencing technical difficulties. I'm LUMI, your AI Security Assistant, and I'm here to help with cybersecurity, web development, and technology questions. Please try again in a moment for a full AI response.";
  }

  // Main chat method with fallback logic - Optimized for NVIDIA
  async chat(
    messages: ChatMessage[], 
    systemPrompt: string,
    preferredModel?: string
  ): Promise<ChatResponse> {
    console.log('🚀 Starting AI chat with NVIDIA-optimized fallback...');
    
    // If preferred model is specified, try it first
    if (preferredModel) {
      const preferredModelObj = getModelById(preferredModel);
      if (preferredModelObj) {
        console.log(`🎯 Trying preferred model: ${preferredModelObj.id}`);
        const response = await this.tryModel(preferredModelObj, messages, systemPrompt);
        if (response.success) {
          return response;
        }
        console.log(`⚠️ Preferred model failed, falling back to NVIDIA models...`);
      }
    }

    // Reset to first model and try fallback chain
    this.resetToFirstModel();
    let lastError: string = '';
    let nvidiaAttempts = 0;

    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      const model = this.getNextModel();
      if (!model) {
        break;
      }

      // Prioritize NVIDIA models
      if (model.provider === 'NVIDIA') {
        nvidiaAttempts++;
        console.log(`🔵 NVIDIA Model Attempt ${nvidiaAttempts}: ${model.id}`);
      } else {
        console.log(`🟡 Backup Model Attempt: ${model.id} (${model.provider})`);
      }
      
      const response = await this.tryModel(model, messages, systemPrompt);
      
      if (response.success) {
        console.log(`🎉 Chat successful with ${model.provider} model: ${model.id}`);
        return response;
      }

      lastError = response.error || 'Unknown error';
      this.moveToNextModel();
    }

    // All models failed - provide intelligent fallback response
    console.log(`💥 All ${this.maxRetries} attempts failed. Last error: ${lastError}`);
    
    const lastUserMessage = messages[messages.length - 1]?.content || '';
    const fallbackContent = this.getFallbackResponse(lastUserMessage);
    
    return {
      content: fallbackContent,
      model: 'fallback',
      provider: 'system',
      success: false,
      error: `All ${this.maxRetries} attempts failed. Last error: ${lastError}`
    };
  }

  // Get available models for the frontend
  getAvailableModels(): { id: string; name: string; provider: string; priority: number }[] {
    return this.models.map(model => ({
      id: model.id,
      name: model.name,
      provider: model.provider,
      priority: model.priority
    }));
  }

  // Get current model status
  getCurrentModelStatus(): { currentIndex: number; totalModels: number; currentModel: AIModel | null } {
    return {
      currentIndex: this.currentModelIndex,
      totalModels: this.models.length,
      currentModel: this.getNextModel()
    };
  }

  // Get NVIDIA-specific model status
  getNvidiaModelStatus(): { totalNvidiaModels: number; nvidiaModels: AIModel[] } {
    return {
      totalNvidiaModels: this.nvidiaModels.length,
      nvidiaModels: this.nvidiaModels
    };
  }
}

// Export singleton instance
export const aiService = new AIService();