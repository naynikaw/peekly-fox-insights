
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, GrowthTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "Peekly has revolutionized how we analyze campaign data. What used to take our team hours now takes minutes. The ability to simply ask questions and get visual answers is a game-changer.",
    stats: "Reduced reporting time by 65%",
    icon: "⏱️"
  },
  {
    name: "Michael Chen",
    role: "Founder, EcoStore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "As a solo founder, I don't have time to dig through analytics. Peekly gives me instant insights about which products are trending and where my ad spend is most effective. It's like having a marketing analyst on demand.",
    stats: "Increased ROAS by 43%",
    icon: "📈"
  },
  {
    name: "Priya Sharma",
    role: "CMO, FitnessBuddy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    text: "Before Peekly, our team was drowning in data but struggling to extract meaningful insights. Now, we can quickly understand user behavior across channels and make data-driven decisions that have measurably improved our conversion rates.",
    stats: "Doubled conversion rate in 3 months",
    icon: "🚀"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Peek into the Success</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            See how businesses use Peekly to make smarter marketing decisions faster.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 hidden lg:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 hidden lg:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-peekly-orange to-blue-400"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl mb-8 text-gray-700 italic">
                "{testimonials[activeIndex].text}"
              </blockquote>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
                
                <div className="flex items-center px-4 py-2 bg-peekly-orange/10 rounded-full">
                  <span className="text-xl mr-2">{testimonials[activeIndex].icon}</span>
                  <span className="font-medium">{testimonials[activeIndex].stats}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center mt-8 gap-2 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-peekly-orange" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
