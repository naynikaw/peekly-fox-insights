
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, PlugZap, MessageSquare, Zap, ArrowUpDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for solo founders, early projects, and teams just getting started.",
      features: [
        "Connect 2 data sources",
        "100 queries/month",
        "Basic insights & charts",
        "Email support"
      ],
      ctaText: "Get Started",
      ctaLink: "#",
      popular: false
    },
    {
      title: "Growth",
      price: "$99",
      description: "For growing teams who need faster, deeper insights across channels.",
      features: [
        "Connect 5 data sources",
        "Unlimited queries",
        "Automated weekly reports",
        "CSV / Excel uploads",
        "Slack / Email alerts"
      ],
      ctaText: "Start Free Trial",
      ctaLink: "#",
      popular: true
    },
    {
      title: "Scale",
      price: "$299",
      description: "For businesses managing multiple channels, brands, or clients.",
      features: [
        "Unlimited data sources",
        "Competitor benchmarking",
        "Automated campaign insights",
        "Custom dashboards",
        "Dedicated support"
      ],
      ctaText: "Talk to Sales",
      ctaLink: "#",
      popular: false
    }
  ];

  const valueProps = [
    {
      icon: <PlugZap className="h-8 w-8 text-peekly-orange" />,
      title: "Connect your data in minutes"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-peekly-orange" />,
      title: "Ask natural language questions"
    },
    {
      icon: <Zap className="h-8 w-8 text-peekly-orange" />,
      title: "Get insights in seconds"
    },
    {
      icon: <ArrowUpDown className="h-8 w-8 text-peekly-orange" />,
      title: "Scale only when you need to"
    }
  ];

  const addons = [
    {
      title: "Done-For-You Setup",
      price: "$499 one-time",
      description: "We'll connect your accounts, configure analytics, and deliver your first insights pack."
    },
    {
      title: "Usage Overages",
      price: "$0.01 per query",
      description: "Per extra query beyond plan limit"
    }
  ];

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Simple, Transparent Pricing Built for Modern Teams.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              No dashboards to wrangle. No analysts required.
              Just powerful answers from your data — at a fraction of the cost of an agency.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-medium">{prop.title}</h3>
              </div>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`flex flex-col h-full ${
                  plan.popular 
                    ? 'border-peekly-orange shadow-lg relative' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-peekly-orange text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-2">
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start">
                        <Check className="h-5 w-5 text-peekly-orange mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-peekly-orange hover:bg-peekly-orange/90' 
                        : plan.title === 'Scale' 
                          ? 'bg-gray-800 hover:bg-gray-700'
                          : ''
                    }`}
                    asChild
                  >
                    <a href={plan.ctaLink}>{plan.ctaText}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Add-ons */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Optional Add-ons</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {addons.map((addon, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{addon.title}</h3>
                    <span className="font-semibold text-peekly-orange">{addon.price}</span>
                  </div>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-white rounded-lg p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Not sure what you need?</h2>
            <p className="text-lg text-gray-600 mb-6">Talk to us — we'll help you pick the right plan.</p>
            <Button size="lg" className="bg-peekly-orange hover:bg-peekly-orange/90">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
