
import { ArrowRight, Database, MessageSquare, LineChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Connect",
      description: "Easily connect your marketing data sources like Google Analytics, Ads, Shopify, and more.",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      title: "Ask",
      description: "Ask questions in plain English. No SQL, no complex queries, just natural language.",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100"
    },
    {
      icon: <LineChart className="h-8 w-8 text-green-500" />,
      title: "Act",
      description: "Get instant insights, visualizations, and actionable recommendations.",
      color: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How Peekly Works</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Get insights from your marketing data in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl p-8 border ${step.borderColor} ${step.color} transition-all hover:shadow-md hover:-translate-y-1`}
            >
              <div className={`${step.iconBg} p-3 rounded-xl inline-flex items-center justify-center mb-5`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-white p-2 rounded-full shadow">
                    <ArrowRight className="h-4 w-4 text-peekly-orange" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
