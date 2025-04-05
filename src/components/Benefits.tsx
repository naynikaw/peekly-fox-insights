
import { CheckCircle2, MessageSquareText, Layers, BarChart3, Clock } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      icon: <MessageSquareText className="h-6 w-6 text-peekly-orange" />,
      title: "Speak to your data in plain English",
      description: "No technical skills required - just ask questions naturally and get clear answers."
    },
    {
      icon: <Layers className="h-6 w-6 text-peekly-orange" />,
      title: "Automatically unify all your data sources",
      description: "Connect Google Analytics, Ads, Shopify, Stripe, Excel and more in one place."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-peekly-orange" />,
      title: "Get visual summaries in seconds",
      description: "Instantly transform complex data into clear charts and actionable insights."
    },
    {
      icon: <Clock className="h-6 w-6 text-peekly-orange" />,
      title: "Save hours of analysis time weekly",
      description: "Perfect for startups, solo founders, and marketing teams with limited resources."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">No Dashboards. No Data Headaches.</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Peekly eliminates the complexity of marketing analytics with an intuitive, conversation-driven approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 border rounded-xl transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center justify-center p-2 bg-peekly-orange/10 rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-peekly-orange/10 to-blue-50 rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Perfect for Marketing Teams That Need:</h3>
              <ul className="space-y-3">
                {["Faster insights without technical skills", "Unified view across marketing channels", "Clear ROI metrics for campaigns", "Time-saving automated analysis"].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-peekly-orange flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="fox-shadow w-48 h-48 md:w-64 md:h-64 relative">
                <div className="absolute top-2 right-2 animate-float">
                  <div className="bg-white p-2 rounded-lg shadow-lg">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-xs">💸</div>
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2 animate-wiggle">
                  <div className="bg-white p-2 rounded-lg shadow-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs">⏱️</div>
                  </div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="text-7xl">🦊</span>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full border-2 border-peekly-orange flex items-center justify-center animate-wiggle">
                      <span className="text-xl">🔍</span>
                    </div>
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

export default Benefits;
