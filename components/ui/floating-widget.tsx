"use client";

import { useState, createContext, useContext, useRef, useEffect } from "react";
import Image from "next/image";
// FontAwesome icons commented out for now since chat functionality is disabled
/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
*/

// Types for chat messages - commented out for now
/*
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
*/

// Create context for sidebar state
const SidebarContext = createContext<{
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});

// Hook to use sidebar context
export const useSidebar = () => useContext(SidebarContext);

export function FloatingWidget() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Chat functionality commented out for now
  /*
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentStreamingMessage, setCurrentStreamingMessage] = useState("");
  const [messageCounter, setMessageCounter] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  */
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Chat functionality commented out for now
  /*
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentStreamingMessage]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: `msg-${messageCounter}-${Date.now()}`,
      role,
      content,
      timestamp: new Date(),
    };
    setMessageCounter(prev => prev + 1);
    setMessages(prev => [...prev, newMessage]);
  };

  const clearChat = () => {
    setMessages([]);
    setCurrentStreamingMessage("");
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");
    addMessage('user', userMessage);
    
    // Quick responses for simple greetings to avoid API calls
    const simpleGreetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
    if (simpleGreetings.some(greeting => userMessage.toLowerCase().includes(greeting))) {
      const responses = [
        "Hello! I'm LUMI, your AI Security Assistant from SKYBER. How can I help you today?",
        "Hi there! I'm LUMI, ready to assist you with cybersecurity, web development, and tech questions.",
        "Hey! I'm LUMI from SKYBER. What would you like to know about our services or technology?",
        "Greetings! I'm LUMI, your AI assistant. How can I help you with your tech needs today?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage('assistant', randomResponse);
      return;
    }
    
    setIsLoading(true);
    setCurrentStreamingMessage("");

    try {
      // Add timeout to prevent hanging - reduced for NVIDIA API
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout for NVIDIA API

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: userMessage }
          ]
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Network error, please try again later');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      let assistantMessage = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              break;
            }
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                assistantMessage += parsed.content;
                setCurrentStreamingMessage(assistantMessage);
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

      if (assistantMessage) {
        addMessage('assistant', assistantMessage);
        setCurrentStreamingMessage("");
      } else {
        // Fallback response if no message was received
        addMessage('assistant', 'I apologize, but I seem to be having trouble responding right now. Please try again in a moment.');
      }
    } catch (error) {
      console.error('Chat error:', error);
      if (error instanceof Error && error.name === 'AbortError') {
        addMessage('assistant', 'Request timed out. Please try again.');
      } else {
        addMessage('assistant', 'Network error, please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  */

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[100vw] sm:w-80 md:w-96 bg-black border-l border-[#17D492]/20 shadow-2xl transition-all duration-500 ease-in-out z-50 ${
          isSidebarOpen 
            ? "translate-x-0" 
            : "translate-x-full"
        }`}
        style={{
          maxHeight: '100vh',
          maxWidth: 'min(100vw, 24rem)',
          overflow: 'hidden'
        }}
      >
        {/* Sidebar Content */}
        <div className="h-full flex flex-col p-3 sm:p-4 md:p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#17D492] to-[#14c082] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Image
                  src="/AI-Video.gif"
                  alt="LUMI AI"
                  width={16}
                  height={16}
                  className="rounded-full sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#17D492] to-[#14c082] bg-clip-text text-transparent truncate">
                LUMI (Coming Soon)
              </h2>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              {/* Clear chat button commented out for now */}
              {/*
              <button
                onClick={clearChat}
                className="w-8 h-8 bg-gray-700 hover:bg-[#17D492] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                title="Clear chat"
              >
                <FontAwesomeIcon icon={faTrash} className="w-3 h-3" />
              </button>
              */}
              <button
                onClick={toggleSidebar}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-[#17D492] hover:to-[#14c082] rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* AI Icon */}
          <div className="flex flex-col items-center mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#17D492] to-[#14c082] rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#17D492] to-[#14c082] rounded-full flex items-center justify-center">
                <Image
                  src="/AI-Video.gif"
                  alt="LUMI AI"
                  width={20}
                  height={20}
                  className="rounded-full sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
              </div>
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
              LUMI: AI Security Assistant
            </h3>
            <p className="text-xs text-gray-400 text-center mt-1">
              Under Development - Coming Soon
            </p>
          </div>

          {/* Messages Container - Replaced with Under Development Animation */}
          <div className="flex-1 flex flex-col items-center justify-center mb-3 sm:mb-4 min-h-0 overflow-hidden">
            {/* Lummi Construction Animation */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-3 sm:mb-4 md:mb-6 flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-[#17D492]/20 to-[#14c082]/20 rounded-full flex items-center justify-center border-2 border-dashed border-[#17D492]/40 animate-pulse">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#17D492] rounded-full flex items-center justify-center mb-2 animate-bounce">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-[#17D492] text-xs font-semibold">Lummi</div>
                </div>
              </div>
            </div>
            
            {/* Under Development Message */}
            <div className="text-center px-2 flex-shrink-0 w-full max-w-xs">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#17D492] mb-2">
                AI Chat Features
              </h3>
              <p className="text-gray-300 text-sm mb-1">
                Coming Soon!
              </p>
              <p className="text-gray-400 text-xs mb-2">
                We're building something amazing for you.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 border border-[#17D492]/20">
                <p className="text-[#17D492] text-xs font-semibold mb-1">
                  🚀 What's Coming:
                </p>
                <ul className="text-gray-400 text-xs space-y-1 text-left">
                  <li>• AI-powered cybersecurity assistance</li>
                  <li>• Web development guidance</li>
                  <li>• Technology consulting support</li>
                  <li>• Real-time project insights</li>
                </ul>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                Stay tuned for the release!
              </p>
            </div>
          </div>

          {/* Send Message Form - Commented Out for Now */}
          {/*
          <div className="mt-auto">
            <div className="flex items-center space-x-3 p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-[#17D492]/20">
              <button className="w-8 h-8 bg-gray-800 hover:bg-[#17D492] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                <FontAwesomeIcon icon={faPaperclip} className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#17D492]/50 focus:border-[#17D492]/50 transition-all disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="w-8 h-8 bg-gradient-to-r from-[#17D492] to-[#14c082] hover:from-[#14c082] hover:to-[#0f9f6f] disabled:from-gray-600 disabled:to-gray-700 rounded-lg flex items-center justify-center text-white transition-all duration-200 hover:scale-110 disabled:scale-100"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
              </button>
            </div>
          </div>
          */}
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed left-2 sm:left-4 bottom-2 sm:bottom-4 z-40">
        <button
          onClick={toggleSidebar}
          className="relative transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {isSidebarOpen ? (
            // Close icon when sidebar is open
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#17D492] to-[#14c082] rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            // AI Video GIF when sidebar is closed
            <Image
              src="/AI-Video.gif"
              alt="AI Video"
              width={48}
              height={48}
              className="drop-shadow-lg sm:w-16 sm:h-16"
            />
          )}
        </button>

        {/* Mobile Responsive - Show on smaller screens */}
        <div className="block sm:hidden">
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {isSidebarOpen ? "Tap to close" : "Tap to chat"}
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}
    </SidebarContext.Provider>
  );
}
