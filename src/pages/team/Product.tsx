
import VerticalTemplate from "@/components/VerticalTemplate";
import { Code, Users, Lightbulb, TrendingUp } from "lucide-react";

const ProductPage = () => {
  const benefits = [
    {
      icon: Users,
      title: "User Behavior Analysis",
      description: "Understand how users interact with your product and what features drive engagement."
    },
    {
      icon: Code,
      title: "Feature Adoption Tracking",
      description: "See which features are most used, by which user segments, and identify areas for improvement."
    },
    {
      icon: Lightbulb,
      title: "Informed Product Decisions",
      description: "Back your product roadmap with usage data and customer behavior patterns."
    },
    {
      icon: TrendingUp,
      title: "Retention Optimization",
      description: "Identify the product experiences that convert trial users to loyal customers."
    }
  ];

  const sampleQueries = [
    "Which features do our power users engage with most frequently?",
    "Compare feature adoption rates between different customer segments",
    "Show me the correlation between feature X usage and customer retention",
    "What's the average time to first value for new users?"
  ];

  return (
    <VerticalTemplate 
      title="Build What Matters to Users"
      subtitle="Ask questions about user behavior, feature adoption, and product metrics in plain English and get visual answers instantly."
      backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
      callToAction="Build Better Products with Better Insights"
    />
  );
};

export default ProductPage;
