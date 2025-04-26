
import VerticalTemplate from "@/components/VerticalTemplate";
import { Star, TrendingUp, BarChart, Users } from "lucide-react";

const FoundersPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Trajectory Analysis",
      description: "Track key business metrics and understand what's driving your company's performance."
    },
    {
      icon: BarChart,
      title: "Resource Allocation Insights",
      description: "Identify which investments yield the highest returns across departments and initiatives."
    },
    {
      icon: Users,
      title: "Team Performance Visibility",
      description: "Get a clear view of how different teams contribute to your business goals."
    },
    {
      icon: Star,
      title: "Strategic Decision Support",
      description: "Back your intuition with data to make confident strategic choices and pivots."
    }
  ];

  const sampleQueries = [
    "What's our burn rate and runway projection for the next 12 months?",
    "Compare department performance against quarterly targets",
    "Show me the correlation between customer satisfaction and retention",
    "Which customer segments have the highest lifetime value?"
  ];

  return (
    <VerticalTemplate 
      title="Lead with Clarity and Confidence"
      subtitle="Ask questions about your business performance, team metrics, and growth trends in plain English and get immediate answers."
      backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
      callToAction="Make Data-Driven Decisions Faster"
    />
  );
};

export default FoundersPage;
