
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchX, Search, ArrowRight } from "lucide-react";

const Demo = () => {
  const [query, setQuery] = useState("");
  const [demoActive, setDemoActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demoResult, setDemoResult] = useState<null | {
    title: string;
    text: string;
    chart: string;
    recommendation: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setLoading(true);
    setDemoActive(true);
    
    // Simulate API response
    setTimeout(() => {
      setDemoResult({
        title: "Campaign Performance Analysis",
        text: "Based on your data from the last 30 days, your social media campaigns are outperforming your search ads by 37% in terms of conversion rate. The average CTR across channels is 2.8%, with Facebook showing the highest engagement.",
        chart: "📊 [Visualization of channel performance comparison]",
        recommendation: "Consider reallocating 20% of your search ad budget to your top-performing social campaigns to maximize ROI. Focus on the 25-34 age demographic where engagement is highest."
      });
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
                      <div className="ml-3">
                        <h4 className="font-semibold text-lg mb-2">{demoResult?.title}</h4>
                        <p className="text-gray-700 mb-4">{demoResult?.text}</p>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4 flex items-center justify-center h-40">
                          <div className="text-center">
                            <p className="text-2xl mb-2">{demoResult?.chart}</p>
                            <p className="text-sm text-gray-500">Interactive chart would appear here</p>
                          </div>
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
