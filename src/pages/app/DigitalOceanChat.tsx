
import React, { useState, useRef, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare, Send } from 'lucide-react';

interface MessageType {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const DigitalOceanChat: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: "Hello! I'm connected to your Digital Ocean backend. Ask me anything about your data.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage: MessageType = {
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      console.log('Sending request to Digital Ocean API:', inputValue);
      
      const response = await fetch('https://dolphin-app-valr6.ondigitalocean.app/api/v1/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: inputValue
        }),
      });
      
      console.log('API Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Response data:', data);
      
      let responseContent: string;
      
      // Check if the response has the expected structure
      if (data && typeof data === 'object') {
        if (data.response) {
          responseContent = data.response;
        } else if (data.error) {
          responseContent = `Error: ${data.error}`;
        } else if (data.message) {
          responseContent = data.message;
        } else {
          // Try to find any text content in the response
          const jsonStr = JSON.stringify(data);
          responseContent = `I received a response but couldn't parse it properly. Raw data: ${jsonStr.substring(0, 200)}${jsonStr.length > 200 ? '...' : ''}`;
        }
      } else {
        responseContent = "I received a response but it wasn't in the expected format.";
      }
      
      const botMessage: MessageType = {
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      toast({
        title: "Connection Error",
        description: "Failed to connect to the Digital Ocean backend. Please try again later.",
        variant: "destructive",
      });
      
      const errorMessage: MessageType = {
        content: "Sorry, I couldn't connect to the backend. Please check your internet connection and try again.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-full p-4 md:p-6">
        <div className="flex items-center mb-4">
          <MessageSquare className="mr-2 h-5 w-5 text-peekly-orange" />
          <h1 className="text-2xl font-semibold">Digital Ocean Chat</h1>
        </div>
        <Separator className="mb-4" />
        
        <div className="flex-1 overflow-auto mb-4 rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex flex-col space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser 
                      ? 'bg-peekly-orange text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask something about your data..."
            className="min-h-[100px] resize-none"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            className="self-end"
            disabled={isLoading || !inputValue.trim()}
          >
            {isLoading ? 'Processing...' : 'Send'}
            {!isLoading && <Send className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </div>
    </AppLayout>
  );
};

export default DigitalOceanChat;
