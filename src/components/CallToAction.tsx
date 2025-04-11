
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-peekly-orange/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Start Peeking into Your Data Today
                  </h2>
                  
                  <p className="text-xl font-semibold text-peekly-orange mb-3">
                    Stop guessing. Start knowing.
                  </p>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    Join businesses already saving time and making smarter decisions with Peekly's AI-powered marketing insights.
                  </p>

                  <div className="space-y-4">
                    {["Free 14-day trial", "No credit card required", "Easy setup, connect in minutes"].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-peekly-orange mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-xl">
                  {!submitted ? (
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Get Early Access</h3>
                      <p className="text-gray-500 mb-6">Be among the first to experience Peekly</p>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Work Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@company.com"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-peekly-orange focus:border-transparent"
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full bg-peekly-orange hover:bg-peekly-orange/90 font-medium text-white py-4 flex items-center justify-center gap-2"
                          disabled={loading || !email.trim()}
                        >
                          {loading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <>
                              Get Started
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                      
                      <p className="text-xs text-gray-500 mt-4 text-center">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your request for early access. We'll be in touch soon with next steps!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
