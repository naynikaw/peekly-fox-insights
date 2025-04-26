
import VerticalTemplate from "@/components/VerticalTemplate";
import { Code, Users, LineChart, Zap } from "lucide-react";

const SaasPage = () => {
  const benefits = [
    {
      icon: Users,
      title: "User Retention Analysis",
      description: "Understand what drives customer retention and reduce churn with actionable insights."
    },
    {
      icon: LineChart,
      title: "MRR & ARR Breakdown",
      description: "Track your recurring revenue metrics and growth trajectories with simple queries."
    },
    {
      icon: Code,
      title: "Feature Adoption Insights",
      description: "See which features drive engagement and which ones might need improvement."
    },
    {
      icon: Zap,
      title: "Customer Journey Mapping",
      description: "Follow your users from sign-up to power users with clear visualizations."
    }
  ];

  const sampleQueries = [
    "What's our user retention rate by pricing tier?",
    "Which features correlate with higher user engagement?",
    "Show me conversion rates from free trial to paid accounts over time",
    "What's the average time to value for new customers?"
  ];

  return (
    <VerticalTemplate 
      title="Grow Your SaaS with Data-Driven Decisions"
      subtitle="Ask questions about your product usage, customer behavior, and business metrics in plain language and get instant answers."
      backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
    />
  );
};

export default SaasPage;
