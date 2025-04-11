
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Instead of processing the form, redirect to the waitlist
    window.open("https://tally.so/r/mKRDp7", "_blank", "noopener noreferrer");
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
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold mb-6">Ready to transform how you use data?</h3>
                    <Button
                      asChild
                      className="w-full bg-peekly-orange hover:bg-peekly-orange/90 font-medium text-white py-4 flex items-center justify-center gap-2"
                    >
                      <a 
                        href="https://tally.so/r/mKRDp7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Join the Waitlist
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      Be among the first to experience Peekly
                    </p>
                  </div>
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
