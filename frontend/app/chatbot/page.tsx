// app/chatbot/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSend, 
  FiUser, 
  FiThumbsUp, 
  FiThumbsDown,
  FiCopy,
  FiRefreshCw,
  FiMessageSquare,
  FiChevronDown,
  FiSearch,
  FiClock
} from 'react-icons/fi';
import { 
  MdSmartToy,
  MdAttachFile,
  MdOutlineEmojiEmotions,
  MdMoreVert
} from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const initialBotMessages = [
  "Hello! I'm your AI assistant. How can I help you today?",
  "I can help you with task management, productivity tips, and answer questions about our app.",
  "Feel free to ask me anything about organizing your tasks or using our features!",
  "You can type questions like 'How do I create a new task?' or 'Show me productivity tips'."
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: initialBotMessages[0], sender: 'bot', timestamp: '10:00 AM' },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "How do I create a new task?",
    "Show me productivity tips",
    "How to use categories?",
    "Can I share tasks with others?"
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking and response
    setTimeout(() => {
      const botResponses = [
        "I understand you're asking about: " + inputText + ". Here's what I can tell you...",
        "Great question! Based on my knowledge, I recommend checking the tutorial section for detailed guidance.",
        "I can help with that! Our app allows you to easily manage tasks by categories and priorities.",
        "For your query, I suggest trying our task categorization feature to better organize your workflow.",
        "Thanks for asking! The best approach is to break large tasks into smaller, manageable steps.",
        "I'm still learning about that specific topic, but I can definitely help with task management and productivity tips!"
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  const handleClearChat = () => {
    setMessages([{ id: 1, text: initialBotMessages[0], sender: 'bot', timestamp: '10:00 AM' }]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const regenerateResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      const newResponses = [
        "Let me rephrase that to be more helpful...",
        "Here's another way to look at it...",
        "Let me provide you with additional insights...",
        "I think this alternative answer might be more useful..."
      ];
      const randomResponse = newResponses[Math.floor(Math.random() * newResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 1,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
              <MdSmartToy className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-800">AI Assistant</h1>
              <p className="text-sm text-gray-600">Powered by TaskFlow Intelligence</p>
            </div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant help with task management, productivity tips, and app features. 
            I'm here to assist you 24/7!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <MdSmartToy className="w-6 h-6" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h2 className="font-bold">TaskFlow Assistant</h2>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Online • Ready to help</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleClearChat}
                      className="p-2 hover:bg-white/10 rounded-lg"
                      title="Clear chat"
                    >
                      <FiRefreshCw className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-2 hover:bg-white/10 rounded-lg"
                      title="More options"
                    >
                      <MdMoreVert className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div 
                ref={chatContainerRef}
                className="h-[500px] overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-gray-100"
              >
                <div className="space-y-6">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          {/* Avatar */}
                          <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              message.sender === 'user' 
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                                : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                            }`}>
                              {message.sender === 'user' ? (
                                <FiUser className="w-4 h-4 text-white" />
                              ) : (
                                <MdSmartToy className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </div>

                          {/* Message Bubble */}
                          <div className={`${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                            <div className={`rounded-2xl px-4 py-3 ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-br-none'
                                : 'bg-white border border-gray-200 rounded-bl-none'
                            } shadow-sm`}>
                              <p className="text-sm">{message.text}</p>
                            </div>
                            
                            {/* Timestamp and Actions */}
                            <div className={`flex items-center gap-2 mt-1 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <span className="text-xs text-gray-500">{message.timestamp}</span>
                              
                              {message.sender === 'bot' && (
                                <div className="flex items-center gap-1">
                                  <button 
                                    onClick={() => copyToClipboard(message.text)}
                                    className="p-1 hover:bg-gray-100 rounded text-gray-500"
                                    title="Copy"
                                  >
                                    <FiCopy className="w-3 h-3" />
                                  </button>
                                  <button 
                                    className="p-1 hover:bg-gray-100 rounded text-gray-500"
                                    title="Helpful"
                                  >
                                    <FiThumbsUp className="w-3 h-3" />
                                  </button>
                                  <button 
                                    className="p-1 hover:bg-gray-100 rounded text-gray-500"
                                    title="Not helpful"
                                  >
                                    <FiThumbsDown className="w-3 h-3" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                          <MdSmartToy className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">AI Assistant is typing...</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex items-end gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
                        <MdAttachFile className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
                        <MdOutlineEmojiEmotions className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message here..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim()}
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg ${
                          inputText.trim()
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        <FiSend className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiMessageSquare className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-gray-800">Quick Questions</h3>
              </div>
              <div className="space-y-3">
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 group-hover:text-purple-600">{question}</span>
                      <FiChevronDown className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transform rotate-270" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="font-bold mb-4">🤖 AI Capabilities</h3>
              <div className="space-y-3">
                {[
                  "Task Management Guidance",
                  "Productivity Tips",
                  "Feature Explanations",
                  "Workflow Optimization",
                  "Best Practices"
                ].map((capability, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-purple-100">{capability}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI Model: GPT-4 • Updated: Today</span>
                </div>
              </div>
            </div>

            {/* Chat History */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5 text-gray-600" />
                  <h3 className="font-bold text-gray-800">Recent Chats</h3>
                </div>
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  Clear All
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { time: "Just now", preview: "How do I create tasks?" },
                  { time: "10:30 AM", preview: "Productivity tips for..." },
                  { time: "Yesterday", preview: "Category organization" },
                  { time: "Nov 15", preview: "Getting started guide" }
                ].map((chat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group">
                    <div>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-purple-600">{chat.preview}</p>
                      <p className="text-xs text-gray-500">{chat.time}</p>
                    </div>
                    <IoMdClose className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Regenerate Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={regenerateResponse}
              className="w-full py-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 text-purple-600 font-semibold rounded-xl shadow-sm border border-purple-200 flex items-center justify-center gap-2 transition-all duration-200"
            >
              <FiRefreshCw className="w-4 h-4" />
              Regenerate Last Response
            </motion.button>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-600 text-sm"
        >
          <p>
            💡 <span className="font-medium">Note:</span> This is a demonstration chatbot. 
            Responses are simulated to show how a real AI assistant would interact.
          </p>
          <p className="mt-1">
            For real support, please visit our <a href="/contact" className="text-purple-600 hover:underline">contact page</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}