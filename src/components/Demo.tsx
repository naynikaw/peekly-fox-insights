
import { useState } from "react";
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
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const Demo = () => {
  const [query, setQuery] = useState("");
  const [demoActive, setDemoActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demoResult, setDemoResult] = useState<null | {
    title: string;
    text: string;
    chartType: "bar" | "line" | "area" | "pie";
    chartData: any[];
    recommendation: string;
  }>(null);

  const channelPerformanceData = [
    { name: "Facebook", conversions: 320, ctr: 4.2, cpa: 12, fill: "#4267B2" },
    { name: "Instagram", conversions: 280, ctr: 3.8, cpa: 14, fill: "#E1306C" },
    { name: "Google", conversions: 180, ctr: 2.3, cpa: 22, fill: "#34A853" },
    { name: "LinkedIn", conversions: 90, ctr: 1.5, cpa: 38, fill: "#0077B5" },
    { name: "Twitter", conversions: 50, ctr: 1.1, cpa: 45, fill: "#1DA1F2" }
  ];
  
  const monthlyComparisonData = [
    { name: "Week 1", "This Month": 65, "Last Month": 42 },
    { name: "Week 2", "This Month": 78, "Last Month": 55 },
    { name: "Week 3", "This Month": 94, "Last Month": 70 },
    { name: "Week 4", "This Month": 120, "Last Month": 85 }
  ];
  
  const budgetAllocationData = [
    { name: "Social", value: 45 },
    { name: "Search", value: 25 },
    { name: "Display", value: 15 },
    { name: "Email", value: 10 },
    { name: "Other", value: 5 }
  ];
  
  const COLORS = ['#9b87f5', '#F97316', '#0EA5E9', '#8B5CF6', '#D946EF'];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setLoading(true);
    setDemoActive(true);
    
    // Match query to predefined responses based on example queries
    setTimeout(() => {
      if (query.toLowerCase().includes("roi") || query.toLowerCase().includes("best")) {
        setDemoResult({
          title: "Channel ROI Analysis",
          text: "Based on your data from the last 30 days, your social media campaigns are outperforming your search ads by 37% in terms of conversion rate. The average CTR across channels is 2.8%, with Facebook showing the highest engagement.",
          chartType: "bar",
          chartData: channelPerformanceData,
          recommendation: "Consider reallocating 20% of your search ad budget to your top-performing social campaigns to maximize ROI. Focus on the 25-34 age demographic where engagement is highest."
        });
      } else if (query.toLowerCase().includes("conversion") || query.toLowerCase().includes("compare")) {
        setDemoResult({
          title: "Conversion Rate Comparison",
          text: "Your conversion rates have improved by 14.3% compared to last month. The strongest weekly growth was observed in week 3, with a 34% increase over the same period last month.",
          chartType: "line",
          chartData: monthlyComparisonData,
          recommendation: "The new call-to-action design implemented in week 2 correlates with increased conversions. Consider expanding this design approach to all campaign landing pages."
        });
      } else if (query.toLowerCase().includes("budget") || query.toLowerCase().includes("focus")) {
        setDemoResult({
          title: "Budget Allocation Analysis",
          text: "Your current budget allocation favors social media channels (45%), followed by search advertising (25%). Based on performance metrics, this distribution is optimal for your current goals.",
          chartType: "pie",
          chartData: budgetAllocationData,
          recommendation: "Your social media spending is well-optimized. For next quarter, consider increasing your search budget by 5-10% to capitalize on growing search traffic for your primary keywords."
        });
      } else {
        // Default fallback
        setDemoResult({
          title: "Campaign Performance Analysis",
          text: "Analysis of your recent campaigns shows strong performance across digital channels with opportunities for optimization in your targeting strategy.",
          chartType: "area",
          chartData: [
            { name: 'Jan', value: 400 },
            { name: 'Feb', value: 300 },
            { name: 'Mar', value: 600 },
            { name: 'Apr', value: 800 },
            { name: 'May', value: 700 },
          ],
          recommendation: "Based on audience engagement patterns, weekday afternoons (2-5pm) show the highest response rates. Consider scheduling more content during these peak hours."
        });
      }
      setLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setQuery("");
    setDemoActive(false);
    setDemoResult(null);
  };

  const exampleQueries = [
    "Which marketing channel has the best ROI?",
    "Compare this month's conversion rates to last month",
    "Where should I focus my ad budget next month?"
  ];

  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  const renderChart = () => {
    if (!demoResult) return null;
    
    switch (demoResult.chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demoResult.chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="conversions" name="Conversions" fill="#9b87f5" />
              <Bar dataKey="ctr" name="CTR (%)" fill="#f5571a" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demoResult.chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="This Month" stroke="#9b87f5" strokeWidth={2} />
              <Line type="monotone" dataKey="Last Month" stroke="#8E9196" strokeWidth={2} strokeDasharray="5 5" />
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
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {demoResult.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={demoResult.chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Peekly in Action</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Try asking a question about your marketing data and see how Peekly responds.
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
                      placeholder="Example: What was my best performing campaign last month?"
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-peekly-orange focus:border-transparent"
                    />
                    <Button 
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-peekly-orange hover:bg-peekly-orange/90"
                      disabled={!query.trim()}
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
                  <p className="ml-3 text-gray-700">{query}</p>
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
