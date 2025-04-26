
import VerticalTemplate from "@/components/VerticalTemplate";
import { Rocket, TrendingUp, Users, BarChart } from "lucide-react";

const GrowthPage = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Growth Lever Identification",
      description: "Quickly identify which actions and channels are driving sustainable growth."
    },
    {
      icon: TrendingUp,
      title: "Experiment Analysis",
      description: "Evaluate A/B tests and growth experiments with clear visualizations and insights."
    },
    {
      icon: Users,
      title: "Activation Funnel Optimization",
      description: "Pinpoint exactly where users drop off and how to improve conversion at each step."
    },
    {
      icon: BarChart,
      title: "North Star Metric Tracking",
      description: "Keep your team focused on the metrics that matter most to your business growth."
    }
  ];

  const sampleQueries = [
    "Which acquisition channel has the lowest CAC and highest LTV?",
    "Compare conversion rates across different onboarding flows",
    "Show me how our activation rate has changed since implementing feature X",
    "What user behaviors are most strongly correlated with retention?"
  ];

  return (
    <VerticalTemplate 
      title="Accelerate Your Growth Trajectory"
      subtitle="Ask questions about acquisition, activation, retention, and revenue in plain English and get visual answers instantly."
      backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
      callToAction="Unlock Sustainable Growth Today"
    />
  );
};

export default GrowthPage;
