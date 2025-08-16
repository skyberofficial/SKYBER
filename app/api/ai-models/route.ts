import { NextResponse } from 'next/server';
import { aiService } from '@/lib/ai-service';

export async function GET() {
  try {
    const models = aiService.getAvailableModels();
    const status = aiService.getCurrentModelStatus();
    const nvidiaStatus = aiService.getNvidiaModelStatus();

    // Categorize models by provider
    const modelsByProvider = models.reduce((acc, model) => {
      if (!acc[model.provider]) {
        acc[model.provider] = [];
      }
      acc[model.provider].push(model);
      return acc;
    }, {} as Record<string, typeof models>);

    // Get NVIDIA models specifically
    const nvidiaModels = models.filter(model => model.provider === 'NVIDIA');
    const backupModels = models.filter(model => model.provider !== 'NVIDIA');

    return NextResponse.json({
      success: true,
      data: {
        models,
        status,
        nvidiaStatus,
        totalModels: models.length,
        modelsByProvider,
        nvidiaModels,
        backupModels,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('AI Models API Error:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch AI models information',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
