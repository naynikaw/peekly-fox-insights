
import VerticalTemplate from "@/components/VerticalTemplate";
import { BarChart, TrendingUp, Users, Zap } from "lucide-react";

const MarketingAgenciesPage = () => {
  const benefits = [
    {
      icon: BarChart,
      title: "Client Campaign Performance",
      description: "Quickly analyze campaign metrics across all clients to identify what's working and what's not."
    },
    {
      icon: TrendingUp,
      title: "ROI Visualization",
      description: "Show clients clear, compelling evidence of your value with beautiful visualizations."
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: "Discover audience behaviors and preferences to refine targeting and creative strategies."
    },
    {
      icon: Zap,
      title: "Rapid Reporting",
      description: "Generate client reports in minutes instead of hours with conversational queries."
    }
  ];

  const sampleQueries = [
    "Compare social media engagement rates across all client accounts",
    "Which client campaigns had the highest conversion rates last month?",
    "Show me the correlation between ad spend and lead quality",
    "What's the average customer acquisition cost by industry across our clients?"
  ];

  return (
    <VerticalTemplate 
      title="Transform Client Reporting and Strategy"
      subtitle="Ask questions about campaign performance, audience insights, and ROI in plain English and get instant visual answers."
      backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
      callToAction="Elevate Your Agency's Analytics Today"
    />
  );
};

export default MarketingAgenciesPage;
