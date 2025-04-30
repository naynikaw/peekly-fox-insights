
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SearchX, Search, ArrowRight } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Demo = () => {
  const [query, setQuery] = useState("");
  const [demoActive, setDemoActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demoResult, setDemoResult] = useState<null | {
    title: string;
    text: string;
    sources: string[];
    chartType: "bar" | "line" | "area" | "pie";
    chartData: any[];
    recommendation: string;
  }>(null);

  // Example queries for auto-typing animation
  const exampleQueries = [
    "Which day of the week gets us the highest signups?",
    "Which ad campaigns drove the most first-time customers?",
    "What's my average customer lifetime value by channel?",
    "Which product bundles have the highest repeat purchase rate?",
    "Which marketing channel brings customers with the lowest refund rates?",
    "Has my ROAS improved since we increased our ad budget?"
  ];

  // Auto-typing animation states
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [typingPosition, setTypingPosition] = useState(0);
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [pauseTyping, setPauseTyping] = useState(false);

  // Data for charts
  const weekdaySignupsData = [
    { name: "Monday", value: 45, fill: "#9b87f5" },
    { name: "Tuesday", value: 52, fill: "#F97316" },
    { name: "Wednesday", value: 78, fill: "#0EA5E9" },
    { name: "Thursday", value: 86, fill: "#8B5CF6" },
    { name: "Friday", value: 64, fill: "#D946EF" },
    { name: "Saturday", value: 42, fill: "#9b87f5" },
    { name: "Sunday", value: 35, fill: "#F97316" }
  ];
  
  const adCampaignData = [
    { name: "Summer Sale", value: 124, firstTime: 87, returning: 37, fill: "#9b87f5" },
    { name: "Back to School", value: 86, firstTime: 63, returning: 23, fill: "#F97316" },
    { name: "Holiday Special", value: 142, firstTime: 95, returning: 47, fill: "#0EA5E9" },
    { name: "New Year", value: 98, firstTime: 72, returning: 26, fill: "#8B5CF6" },
    { name: "Spring Launch", value: 76, firstTime: 58, returning: 18, fill: "#D946EF" }
  ];
  
  const cltValueData = [
    { name: "Organic", value: 450, fill: "#9b87f5" },
    { name: "Paid Social", value: 320, fill: "#F97316" },
    { name: "Email", value: 520, fill: "#0EA5E9" },
    { name: "Referral", value: 580, fill: "#8B5CF6" },
    { name: "Direct", value: 280, fill: "#D946EF" }
  ];
  
  const roasTimelineData = [
    { name: "Jan", beforeBudgetIncrease: 3.2, afterBudgetIncrease: 3.1 },
    { name: "Feb", beforeBudgetIncrease: 3.1, afterBudgetIncrease: 3.3 },
    { name: "Mar", beforeBudgetIncrease: 2.9, afterBudgetIncrease: 3.5 },
    { name: "Apr", beforeBudgetIncrease: 3.0, afterBudgetIncrease: 3.8 },
    { name: "May", beforeBudgetIncrease: 3.1, afterBudgetIncrease: 4.2 },
    { name: "Jun", beforeBudgetIncrease: 2.8, afterBudgetIncrease: 4.5 }
  ];

  // Auto-typing animation effect
  useEffect(() => {
    // Skip animation if user has entered their own query
    if (!isTyping) return;
    
    const currentExample = exampleQueries[currentQueryIndex];
    
    if (pauseTyping) {
      const pause = setTimeout(() => {
        setPauseTyping(false);
        setTypingPosition(0);
        setCurrentQueryIndex((prevIndex) => (prevIndex + 1) % exampleQueries.length);
      }, 2000);
      
      return () => clearTimeout(pause);
    }
    
    if (typingPosition < currentExample.length) {
      const typing = setTimeout(() => {
        setDisplayedQuery(currentExample.substring(0, typingPosition + 1));
        setTypingPosition(prev => prev + 1);
      }, Math.random() * 50 + 50); // Random typing speed for realism
      
      return () => clearTimeout(typing);
    } else {
      setPauseTyping(true);
    }
  }, [typingPosition, currentQueryIndex, pauseTyping, isTyping, exampleQueries]);

  const handleInputFocus = () => {
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim() && !displayedQuery.trim()) return;
    
    setLoading(true);
    setDemoActive(true);
    
    // Use either user-entered query or the current displayed auto-typing query
    const submittedQuery = query.trim() || displayedQuery.trim();
    
    // Match query to predefined responses based on example queries
    setTimeout(() => {
      if (submittedQuery.toLowerCase().includes("day of the week") || submittedQuery.toLowerCase().includes("highest signups")) {
        setDemoResult({
          title: "Weekday Signup Analysis",
          text: "Thursday consistently shows the highest signup volume, with 23% more signups than the average weekday. Wednesday is a close second. Weekend signups are significantly lower, with Sunday having the lowest conversion rate.",
          sources: ["Google Analytics", "CRM Data"],
          chartType: "bar",
          chartData: weekdaySignupsData,
          recommendation: "Consider timing your email campaigns and special offers for Thursday release to capitalize on peak signup days. You might also want to test additional incentives for weekend signups to increase conversion during lower-performing days."
        });
      } else if (submittedQuery.toLowerCase().includes("ad campaigns") || submittedQuery.toLowerCase().includes("first-time")) {
        setDemoResult({
          title: "First-Time Customer Acquisition by Campaign",
          text: "Your Holiday Special campaign was most effective at attracting new customers, bringing in 95 first-time buyers. The Summer Sale was second with 87 first-time customers.",
          sources: ["Google Ads", "Shopify", "CRM Data"],
          chartType: "bar",
          chartData: adCampaignData,
          recommendation: "The Holiday Special campaign's messaging and creative assets performed exceptionally well for new customer acquisition. Consider adapting these elements for your upcoming campaigns, particularly the clear value proposition and time-limited offer structure."
        });
      } else if (submittedQuery.toLowerCase().includes("lifetime value") || submittedQuery.toLowerCase().includes("cltv")) {
        setDemoResult({
          title: "Customer Lifetime Value by Channel",
          text: "Referral customers have the highest lifetime value at $580, followed by Email at $520. Direct traffic and Paid Social show lower lifetime values, suggesting opportunities for improved targeting.",
          sources: ["Shopify", "Stripe", "Google Analytics"],
          chartType: "pie",
          chartData: cltValueData,
          recommendation: "Your referral program is generating your highest-value customers. Consider increasing referral incentives and making the program more visible. For paid social, review targeting parameters as these customers currently have a significantly lower lifetime value."
        });
      } else if (submittedQuery.toLowerCase().includes("roas") || submittedQuery.toLowerCase().includes("ad budget")) {
        setDemoResult({
          title: "ROAS Before & After Budget Increase",
          text: "Since increasing your ad budget in March, your Return On Ad Spend (ROAS) has consistently improved month-over-month, rising from an average of 3.0 to 4.5 by June.",
          sources: ["Google Ads", "Facebook Ads", "Google Analytics"],
          chartType: "line",
          chartData: roasTimelineData,
          recommendation: "The increased budget appears to have unlocked better performing ad inventory and audience segments. Continue with the current budget allocation, but consider conducting incrementality testing to verify that these improvements are directly attributable to the budget increase rather than seasonal effects."
        });
      } else {
        // Default fallback - use whichever of the specific queries seems most relevant
        setDemoResult({
          title: "Weekday Signup Analysis",
          text: "Thursday consistently shows the highest signup volume, with 23% more signups than the average weekday. Wednesday is a close second. Weekend signups are significantly lower, with Sunday having the lowest conversion rate.",
          sources: ["Google Analytics", "CRM Data"],
          chartType: "bar",
          chartData: weekdaySignupsData,
          recommendation: "Consider timing your email campaigns and special offers for Thursday release to capitalize on peak signup days. You might also want to test additional incentives for weekend signups to increase conversion during lower-performing days."
        });
      }
      setLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setQuery("");
    setDemoActive(false);
    setDemoResult(null);
    setIsTyping(true);
    setTypingPosition(0);
    setPauseTyping(false);
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
    setIsTyping(false); // Stop auto-typing when user selects an example
  };

  const renderChart = () => {
    if (!demoResult) return null;
    
    switch (demoResult.chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demoResult.chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              {demoResult.chartData[0]?.firstTime !== undefined ? (
                <>
                  <Bar dataKey="firstTime" name="First-Time Customers" fill="#9b87f5" />
                  <Bar dataKey="returning" name="Returning Customers" stackId="a" fill="#f5571a" />
                </>
              ) : (
                <Bar dataKey="value" name="Signups" fill="#f5571a" />
              )}
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demoResult.chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="beforeBudgetIncrease" name="Before Budget Increase" stroke="#8E9196" strokeWidth={2} />
              <Line type="monotone" dataKey="afterBudgetIncrease" name="After Budget Increase" stroke="#f5571a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={demoResult.chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: $${demoResult.chartData.find(item => item.name === name)?.value}`}
              >
                {demoResult.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value}`, 'Lifetime Value']} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={demoResult.chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#f5571a" fill="#f5571a" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <section id="try-demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ask the Questions Dashboards Can't Answer.</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Your data knows the answers — you've just never had the right way to ask.
          </p>
        </div>

        <div className="max-w-4xl mx-auto border rounded-2xl shadow-md overflow-hidden bg-white">
          <div className="border-b p-4 bg-gray-50 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center text-sm font-medium text-gray-500">
              Peekly Demo
            </div>
          </div>
          
          <div className="p-6 min-h-[400px] flex flex-col">
            {!demoActive ? (
              <>
                <div className="text-center mb-8">
                  <div className="inline-block p-3 bg-peekly-orange/10 rounded-full mb-4">
                    <Search className="h-8 w-8 text-peekly-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ask Peekly a question</h3>
                  <p className="text-gray-500">Type your marketing question below or try one of our examples</p>
                </div>
                
                <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={handleInputFocus}
                      placeholder={isTyping ? displayedQuery : "Ask a question about your marketing data..."}
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-peekly-orange focus:border-transparent"
                    />
                    <Button 
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-peekly-orange hover:bg-peekly-orange/90"
                      disabled={!query.trim() && !displayedQuery.trim()}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
                
                <div className="mt-8 flex flex-wrap gap-2 justify-center">
                  {exampleQueries.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(example)}
                      className="text-sm bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-full text-gray-700"
                    >
                      "{example}"
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col">
                <div className="bg-gray-100 p-4 rounded-lg mb-4 flex items-start">
                  <div className="bg-peekly-orange h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold">
                    Q
                  </div>
                  <p className="ml-3 text-gray-700">{query || displayedQuery}</p>
                </div>
                
                {loading ? (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-t-4 border-peekly-orange border-opacity-50 animate-spin"></div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Analyzing your data...</p>
                  </div>
                ) : (
                  <>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4 flex">
                      <div className="bg-blue-500 h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold">
                        P
                      </div>
                      <div className="ml-3 w-full">
                        {/* Data sources chips */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {demoResult?.sources.map((source, i) => (
                            <span key={i} className="text-xs bg-white px-2 py-1 rounded-full border border-gray-200 text-gray-600">
                              {source}
                            </span>
                          ))}
                        </div>
                        
                        <h4 className="font-semibold text-lg mb-2">{demoResult?.title}</h4>
                        <p className="text-gray-700 mb-4">{demoResult?.text}</p>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4 h-64">
                          {renderChart()}
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <p className="text-sm font-semibold mb-1 text-green-800">Recommendation:</p>
                          <p className="text-gray-700">{demoResult?.recommendation}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-center">
                      <Button 
                        onClick={handleReset} 
                        variant="outline"
                        className="gap-2"
                      >
                        <SearchX className="h-4 w-4" />
                        Ask another question
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
