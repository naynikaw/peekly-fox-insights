
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface VerticalTemplateProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  benefits: BenefitProps[];
  sampleQueries: string[];
  callToAction?: string;
}

const VerticalTemplate = ({
  title,
  subtitle,
  backgroundImage,
  benefits,
  sampleQueries,
  callToAction = "Start Peeking into Your Data Today"
}: VerticalTemplateProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-peekly-dark/80 to-peekly-dark/60"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {subtitle}
            </p>
            <Button asChild size="lg" className="bg-peekly-orange hover:bg-peekly-orange/90 text-white rounded-full px-8">
              <a href="https://tally.so/r/mKRDp7" target="_blank" rel="noopener noreferrer">
                Join the Waitlist
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Benefits for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-peekly-orange">
                    <benefit.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Queries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ask Peekly Anything
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Simply ask questions in plain language and get instant insights. Here are some examples of what you could ask:
              </p>
              
              <div className="space-y-4">
                {sampleQueries.map((query, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-peekly-orange relative"
                  >
                    <p className="text-gray-700">"{query}"</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-1 bg-peekly-orange"></div>
                <div className="p-6">
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="font-medium text-gray-800">What were our top 3 performing products last month?</p>
                  </div>
                  
                  <div className="bg-peekly-orange/10 rounded-xl p-4 border-l-4 border-peekly-orange relative">
                    <p className="text-gray-700">Based on your data, your top 3 performing products in April 2025 were:</p>
                    <ol className="mt-2 ml-5 list-decimal">
                      <li className="font-medium">Premium Analytics Package ($48,750)</li>
                      <li className="font-medium">Data Visualization Pro ($32,100)</li>
                      <li className="font-medium">Insights Starter Kit ($18,350)</li>
                    </ol>
                    <div className="absolute -left-6 bottom-1">
                      <img 
                        src="/lovable-uploads/32c7a0ad-7bb8-437b-a840-96df303ec58c.png"
                        alt="Peekly Fox" 
                        className="w-10 h-10 fox-shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-peekly-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {callToAction}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist today and be the first to experience how Peekly can transform your data analytics experience.
          </p>
          <Button asChild size="lg" className="bg-peekly-orange hover:bg-peekly-orange/90 text-white rounded-full px-8">
            <a href="https://tally.so/r/mKRDp7" target="_blank" rel="noopener noreferrer">
              Join the Waitlist
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default VerticalTemplate;
