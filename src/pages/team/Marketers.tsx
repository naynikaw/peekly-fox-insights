
import VerticalTemplate from "@/components/VerticalTemplate";
import { BarChart, TrendingUp, Users, Pencil } from "lucide-react";

const MarketersPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Campaign Performance Analysis",
      description: "Get instant insights on which campaigns are driving the most valuable conversions."
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Discover high-value segments and understand what messaging resonates with each."
    },
    {
      icon: BarChart,
      title: "Channel Attribution",
      description: "See which channels contribute most to your marketing goals with multi-touch attribution."
    },
    {
      icon: Pencil,
      title: "Content Performance",
      description: "Understand which content topics, formats, and distribution strategies drive engagement."
    }
  ];

  const sampleQueries = [
    "Which marketing channel had the highest ROI last quarter?",
    "Compare conversion rates between our email campaigns and social ads",
    "Show me which content topics drive the most qualified leads",
    "What's the customer journey from first touch to purchase?"
  ];

  return (
    <VerticalTemplate 
      title="Marketing Insights at the Speed of Thought"
      subtitle="Ask questions about your campaigns, channels, and audience in plain English and get visual answers instantly."
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
      callToAction="Optimize Your Marketing Strategy Today"
    />
  );
};

export default MarketersPage;
