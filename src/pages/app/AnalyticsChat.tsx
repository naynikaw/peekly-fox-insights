import React, { useState, useRef, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, LineChart, BarChart, PieChart, Lightbulb } from 'lucide-react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

// Mock chart data
const trafficData = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 19000 },
  { name: 'Mar', value: 15000 },
  { name: 'Apr', value: 28000 },
  { name: 'May', value: 32000 },
  { name: 'Jun', value: 27000 },
  { name: 'Jul', value: 35000 },
];

const conversionData = [
  { name: 'Homepage', value: 5.8 },
  { name: 'Products', value: 3.2 },
  { name: 'Blog', value: 2.1 },
  { name: 'Pricing', value: 7.3 },
  { name: 'About', value: 1.9 },
];

const channelData = [
  { name: 'Organic', value: 45 },
  { name: 'Paid', value: 25 },
  { name: 'Social', value: 15 },
  { name: 'Direct', value: 15 },
];

const COLORS = ['#F97316', '#3B82F6', '#10B981', '#8B5CF6', '#EC4899'];

// Types for messages
type ChartType = 'line' | 'bar' | 'pie' | 'none';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  chartType?: ChartType;
  chartData?: any[];
  chartTitle?: string;
}

// Suggested prompts
const suggestedPrompts = [
  "What were my top performing pages last month?",
  "Show me traffic trends over the past 6 months",
  "Which marketing channels drive the most conversions?",
  "What's my average checkout conversion rate?",
  "Which products have the highest revenue?"
];

const AnalyticsChat: React.FC = () => {
  const { websiteUrl } = useAnalytics();
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: `Hi there! I'm your Peekly analytics assistant. Ask me anything about ${websiteUrl || 'your website'}'s performance.`, 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessageId = Date.now();
    setMessages(prev => [...prev, { id: userMessageId, text, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let responseMessage: Message = {
        id: userMessageId + 1,
        text: generateResponse(text),
        sender: 'bot',
        chartType: 'none'
      };
      
      // Add chart based on question content
      if (text.toLowerCase().includes('trend') || text.toLowerCase().includes('over time')) {
        responseMessage.chartType = 'line';
        responseMessage.chartData = trafficData;
        responseMessage.chartTitle = 'Website Traffic Trend';
      } else if (text.toLowerCase().includes('page') || text.toLowerCase().includes('conversion')) {
        responseMessage.chartType = 'bar';
        responseMessage.chartData = conversionData;
        responseMessage.chartTitle = 'Conversion Rate by Page';
      } else if (text.toLowerCase().includes('channel') || text.toLowerCase().includes('source')) {
        responseMessage.chartType = 'pie';
        responseMessage.chartData = channelData;
        responseMessage.chartTitle = 'Traffic by Channel';
      }
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (question: string): string => {
    // Very simple response generation based on keywords
    if (question.toLowerCase().includes('top') && question.toLowerCase().includes('page')) {
      return "Your top performing pages last month were the homepage (45K visits), product page (32K visits), and blog (28K visits). The homepage had the highest engagement with an average session duration of 2:35.";
    } 
    if (question.toLowerCase().includes('trend') || question.toLowerCase().includes('over time')) {
      return "Your website traffic has been showing a positive trend with a 23% increase over the last 6 months. July saw the highest traffic with 35K visits, which coincides with your summer promotion campaign.";
    }
    if (question.toLowerCase().includes('channel') || question.toLowerCase().includes('marketing')) {
      return "Organic search is your best performing channel at 45% of total traffic, followed by paid campaigns at 25%. However, in terms of conversion rate, direct traffic leads at 4.8%.";
    }
    if (question.toLowerCase().includes('conversion') || question.toLowerCase().includes('checkout')) {
      return "Your average checkout conversion rate is 2.4%, which is slightly above the industry average of 2.1%. The pricing page has your highest conversion rate at 7.3%.";
    }
    if (question.toLowerCase().includes('product') || question.toLowerCase().includes('revenue')) {
      return "Your top revenue generating products are Premium Plan ($45K), Basic Plan ($32K), and Enterprise Solution ($28K). The Premium Plan also has the highest profit margin at 68%.";
    }
    // Default response
    return "Based on your website analytics, I can see interesting patterns in your data. Your traffic has been growing steadily and your conversion rates are above industry average. Would you like me to dive deeper into any specific metric?";
  };

  return (
    <AppLayout>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b bg-white">
          <h1 className="text-xl font-semibold">Analytics Chat</h1>
          <p className="text-gray-500 text-sm">Ask questions about {websiteUrl || 'your website'}'s performance</p>
        </div>
      
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 ${message.sender === 'user' ? 'flex justify-end' : ''}`}
              >
                <div 
                  className={`p-4 rounded-lg max-w-[85%] ${
                    message.sender === 'user' 
                      ? 'bg-peekly-orange text-white' 
                      : 'bg-white border'
                  }`}
                >
                  <p>{message.text}</p>
                  
                  {/* Chart if available */}
                  {message.chartType !== 'none' && message.chartData && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">{message.chartTitle}</h4>
                      <div className="h-64 w-full">
                        {message.chartType === 'line' && (
                          <ChartContainer config={{}}>
                            <RechartsLineChart data={message.chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Line type="monotone" dataKey="value" stroke="#F97316" strokeWidth={2} />
                            </RechartsLineChart>
                          </ChartContainer>
                        )}
                        
                        {message.chartType === 'bar' && (
                          <ChartContainer config={{}}>
                            <RechartsBarChart data={message.chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="value" fill="#F97316" />
                            </RechartsBarChart>
                          </ChartContainer>
                        )}
                        
                        {message.chartType === 'pie' && (
                          <ChartContainer config={{}}>
                            <RechartsPieChart>
                              <Pie
                                data={message.chartData}
                                nameKey="name"
                                dataKey="value"
                                outerRadius={80}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {message.chartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </RechartsPieChart>
                          </ChartContainer>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="mb-4">
                <div className="inline-flex items-center bg-white border rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Suggested prompts */}
        <div className="bg-white p-4 border-t overflow-x-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="h-4 w-4 text-peekly-orange" />
              <span className="text-sm font-medium">Suggested questions</span>
            </div>
            <div className="flex space-x-2 pb-2">
              {suggestedPrompts.map((prompt, index) => (
                <Button 
                  key={index}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap"
                  onClick={() => handleSendMessage(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Input area */}
        <div className="bg-white p-4 border-t">
          <div className="max-w-4xl mx-auto">
            <form 
              className="flex space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about your analytics data..."
                className="flex-1"
              />
              <Button type="submit" disabled={!inputValue.trim() || isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AnalyticsChat;
