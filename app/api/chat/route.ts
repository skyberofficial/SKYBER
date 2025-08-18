import { NextRequest, NextResponse } from 'next/server';
import { aiService, ChatMessage } from '@/lib/ai-service';

export async function POST(req: NextRequest) {
  try {
    const { messages, preferredModel } = await req.json();

    // Check if user is asking about projects
    const lastMessage = messages[messages.length - 1];
    let projectContext = "";
    
    if (lastMessage && lastMessage.role === 'user') {
      const userMessage = lastMessage.content.toLowerCase();
      
      // Check if user is asking about projects, work, portfolio, etc.
      if (userMessage.includes('project') || userMessage.includes('work') || userMessage.includes('portfolio') || 
          userMessage.includes('what do you do') || userMessage.includes('services') || userMessage.includes('experience')) {
        
        try {
          // Fetch project data from the website
          const projectData = {
            services: [
              {
                name: "Cybersecurity",
                description: "Comprehensive security solutions including penetration testing, vulnerability assessment, and security consulting.",
                projects: ["Enterprise Security Audit", "Network Security Implementation", "Security Policy Development"]
              },
              {
                name: "Web Development",
                description: "Modern web applications using Next.js, TypeScript, and cutting-edge technologies.",
                projects: ["E-commerce Platform", "Corporate Website", "Web Application Security"]
              },
              {
                name: "App Development",
                description: "Mobile and desktop applications with focus on user experience and performance.",
                projects: ["Cross-platform Mobile App", "Desktop Management Tool", "IoT Application"]
              },
              {
                name: "UI/UX Design",
                description: "User-centered design with accessibility and modern design principles.",
                projects: ["Design System Creation", "User Research & Testing", "Interface Redesign"]
              },
              {
                name: "Tech Consultancy",
                description: "Strategic technology advice and digital transformation consulting.",
                projects: ["Technology Roadmap", "Digital Strategy", "Process Optimization"]
              }
            ],
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Cybersecurity Tools"],
            expertise: ["Cybersecurity", "Web Development", "Mobile Development", "UI/UX Design", "Cloud Computing", "DevOps"]
          };
          
          projectContext = `\n\nCompany Information:\nSKYBER is a technology company specializing in cybersecurity, web development, app development, UI/UX design, and tech consultancy. We use modern technologies like Next.js, React, TypeScript, and Tailwind CSS. Our services include:\n${projectData.services.map(service => `- ${service.name}: ${service.description}`).join('\n')}\n\nTechnologies: ${projectData.technologies.join(', ')}\nAreas of Expertise: ${projectData.expertise.join(', ')}`;
        } catch (error) {
          console.log('Project data fetch error:', error);
        }
      }
    }

    // Fetch relevant knowledge base data
    let knowledgeContext = "";
    try {
      if (lastMessage && lastMessage.role === 'user') {
        const searchTerm = lastMessage.content.toLowerCase();
        
        // Fetch knowledge base data with timeout
        const knowledgePromise = fetch(`${req.nextUrl.origin}/api/ai-data?search=${encodeURIComponent(searchTerm)}`);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Knowledge base timeout')), 3000) // 3 second timeout
        );
        
        const knowledgeResponse = await Promise.race([knowledgePromise, timeoutPromise]) as Response;
        
        if (knowledgeResponse.ok) {
          const knowledgeData = await knowledgeResponse.json();
          if (knowledgeData.success && knowledgeData.data.length > 0) {
            // Build context from relevant knowledge entries
            const relevantEntries = knowledgeData.data.slice(0, 3); // Limit to top 3 relevant entries
            knowledgeContext = "\n\nRelevant Knowledge Base Information:\n" + 
              relevantEntries.map((entry: { title: string; content: string }) => 
                `- ${entry.title}: ${entry.content}`
              ).join('\n');
          }
        }
      }
    } catch (error) {
      console.log('Knowledge base fetch error or timeout:', error);
      // Continue without knowledge base if there's an error or timeout
    }

    // Create system prompt
    const systemPrompt = `You are LUMI, an intelligent AI Security Assistant for SKYBER, a technology company. You provide helpful, accurate, and professional advice about cybersecurity, web development, app development, UI/UX design, and technology consulting.

${projectContext}

${knowledgeContext}

Always respond naturally and conversationally. If someone says "hi" or "hello", greet them warmly and ask how you can help. Be helpful, friendly, and professional. Use the company information and knowledge base when relevant to provide accurate responses.`;

    // Use AI service with fallback logic
    const response = await aiService.chat(messages, systemPrompt, preferredModel);

    if (response.success) {
      // Return successful response
      return NextResponse.json({
        content: response.content,
        model: response.model,
        provider: response.provider,
        success: true
      });
    } else {
      // Return fallback response
      return NextResponse.json({
        content: response.content,
        model: 'fallback',
        provider: 'system',
        success: false,
        error: response.error
      }, { status: 503 });
    }

  } catch (error) {
    console.error('Chat API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Network error, please try again later',
        content: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.",
        model: 'error',
        provider: 'system',
        success: false
      },
      { status: 500 }
    );
  }
}
