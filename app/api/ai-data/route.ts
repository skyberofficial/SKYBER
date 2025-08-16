import { NextRequest, NextResponse } from 'next/server';

// Sample knowledge base data - in production, this would come from a database
const knowledgeBase = [
  {
    id: '1',
    title: 'Cybersecurity Best Practices',
    content: 'Implement multi-factor authentication, regular security updates, employee training, and incident response planning to protect against cyber threats.',
    category: 'cybersecurity',
    tags: ['security', 'authentication', 'training', 'incident-response'],
    priority: 'high',
    isActive: true
  },
  {
    id: '2',
    title: 'Modern Web Development Stack',
    content: 'Use Next.js for server-side rendering, TypeScript for type safety, Tailwind CSS for styling, and Framer Motion for animations. This stack provides excellent performance, developer experience, and user experience.',
    category: 'web-development',
    tags: ['nextjs', 'typescript', 'tailwind', 'framer-motion', 'performance'],
    priority: 'high',
    isActive: true
  },
  {
    id: '3',
    title: 'Mobile App Development Guidelines',
    content: 'Focus on user experience, performance optimization, cross-platform compatibility, and regular updates for mobile applications. Consider using React Native or Flutter for cross-platform development.',
    category: 'app-development',
    tags: ['mobile', 'ux', 'performance', 'cross-platform', 'react-native', 'flutter'],
    priority: 'medium',
    isActive: true
  },
  {
    id: '4',
    title: 'UI/UX Design Principles',
    content: 'Follow user-centered design principles: understand user needs, create intuitive interfaces, ensure accessibility, and conduct user testing. Use consistent design systems and responsive design.',
    category: 'ui-ux',
    tags: ['design', 'user-experience', 'accessibility', 'responsive', 'testing'],
    priority: 'medium',
    isActive: true
  },
  {
    id: '5',
    title: 'Tech Consultancy Best Practices',
    content: 'Provide strategic technology advice, conduct thorough assessments, develop roadmaps, and ensure clear communication with stakeholders. Focus on business value and ROI.',
    category: 'tech-consultancy',
    tags: ['consulting', 'strategy', 'assessment', 'roadmap', 'stakeholders', 'roi'],
    priority: 'high',
    isActive: true
  },
  {
    id: '6',
    title: 'API Security Guidelines',
    content: 'Implement proper authentication, authorization, input validation, rate limiting, and encryption for APIs. Use HTTPS, implement CORS policies, and regularly audit security.',
    category: 'cybersecurity',
    tags: ['api', 'security', 'authentication', 'encryption', 'cors', 'https'],
    priority: 'high',
    isActive: true
  },
  {
    id: '7',
    title: 'Database Optimization Techniques',
    content: 'Use proper indexing, query optimization, connection pooling, and caching strategies. Monitor performance metrics and implement database maintenance routines.',
    category: 'general',
    tags: ['database', 'optimization', 'indexing', 'caching', 'performance', 'monitoring'],
    priority: 'medium',
    isActive: true
  },
  {
    id: '8',
    title: 'Cloud Security Best Practices',
    content: 'Implement identity and access management, data encryption, network security, and compliance monitoring. Use cloud-native security tools and follow the shared responsibility model.',
    category: 'cybersecurity',
    tags: ['cloud', 'security', 'iam', 'encryption', 'compliance', 'monitoring'],
    priority: 'high',
    isActive: true
  }
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const tags = searchParams.get('tags');

    let filteredData = knowledgeBase.filter(entry => entry.isActive);

    // Filter by category
    if (category && category !== 'all') {
      filteredData = filteredData.filter(entry => entry.category === category);
    }

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredData = filteredData.filter(entry => 
        entry.title.toLowerCase().includes(searchLower) ||
        entry.content.toLowerCase().includes(searchLower) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Filter by tags
    if (tags) {
      const tagArray = tags.split(',').map(tag => tag.trim().toLowerCase());
      filteredData = filteredData.filter(entry =>
        entry.tags.some(tag => tagArray.includes(tag.toLowerCase()))
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredData,
      total: filteredData.length,
      categories: ['cybersecurity', 'web-development', 'app-development', 'ui-ux', 'tech-consultancy', 'general']
    });
  } catch (error) {
    console.error('AI Data API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AI data' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, content, category, tags, priority } = body;

    // Validate required fields
    if (!title || !content || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique ID using counter and timestamp
    const entryId = `api-entry-${knowledgeBase.length + 1}-${Date.now()}`;

    // In production, this would save to a database
    const newEntry = {
      id: entryId,
      title,
      content,
      category,
      tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      priority: priority || 'medium',
      isActive: true,
      createdAt: new Date().toISOString()
    };

    // Add to knowledge base (in production, this would be a database operation)
    knowledgeBase.push(newEntry);

    return NextResponse.json({
      success: true,
      data: newEntry,
      message: 'Knowledge entry created successfully'
    });
  } catch (error) {
    console.error('AI Data Creation Error:', error);
    return NextResponse.json(
      { error: 'Failed to create knowledge entry' },
      { status: 500 }
    );
  }
}
