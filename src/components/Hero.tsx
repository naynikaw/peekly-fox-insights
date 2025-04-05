
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9731620_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-peekly-orange/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Ask Your Data <span className="text-peekly-orange">Anything.</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl max-w-lg">
              Peekly is your AI marketing consultant — connect your data sources and get instant answers, insights, and visualizations, all through natural language.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-peekly-orange hover:bg-peekly-orange/90 text-white rounded-full">
                <a href="#try-demo">Try the Demo</a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full gap-2">
                <a href="#video">
                  <Play size={16} className="text-peekly-orange" />
                  <span>Watch Peekly in Action</span>
                </a>
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="inline-block w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">✓</span>
                No credit card required
              </p>
            </div>
          </div>
          
          {/* Fox Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Magnifying Glass */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-full border-4 border-peekly-orange/80 shadow-lg transform -rotate-12 animate-float z-20">
                <div className="absolute bottom-0 right-0 w-8 h-16 bg-peekly-orange/80 rounded-full transform rotate-45 translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              {/* Fox */}
              <div className="w-full h-full relative flex items-center justify-center animate-float z-10">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/f74d180e-cb8f-43d0-952c-2261b1164511.png" 
                    alt="Peekly Fox" 
                    className="w-48 h-48 object-contain"
                  />
                  
                  {/* Digital Elements */}
                  <div className="absolute -top-6 -right-6 p-2 bg-white rounded-lg shadow-lg transform rotate-12 animate-wiggle">
                    <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-semibold">📊</div>
                  </div>
                  
                  <div className="absolute -bottom-2 -left-8 p-2 bg-white rounded-lg shadow-lg transform -rotate-6 animate-float">
                    <div className="w-12 h-8 bg-green-100 rounded flex items-center justify-center text-xs font-semibold">📈</div>
                  </div>
                  
                  <div className="absolute bottom-12 -right-12 p-2 bg-white rounded-lg shadow-lg transform -rotate-12 animate-wiggle">
                    <div className="w-12 h-8 bg-purple-100 rounded flex items-center justify-center text-xs font-semibold">💡</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
