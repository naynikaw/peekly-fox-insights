
import VerticalTemplate from "@/components/VerticalTemplate";
import { BarChart, Users, TrendingUp, Briefcase } from "lucide-react";

const SMBPage = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Business Intelligence Made Simple",
      description: "Get enterprise-level insights without enterprise-level complexity or cost."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Keep tabs on your key metrics and understand what drives your business forward."
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Empower everyone on your team to make data-driven decisions, regardless of technical skill."
    },
    {
      icon: BarChart,
      title: "Competitive Edge",
      description: "Respond to market changes quickly with real-time insights and visualizations."
    }
  ];

  const sampleQueries = [
    "What were our top 5 highest revenue customers last quarter?",
    "Compare our sales team's performance year over year",
    "Show me our inventory turnover rate by product category",
    "Which service line has shown the most consistent growth?"
  ];

  return (
    <VerticalTemplate 
      title="Small Business, Big Insights"
      subtitle="Ask questions about your business data in plain English and get visual answers instantly – no data team required."
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
      callToAction="Level Up Your Business Intelligence Today"
    />
  );
};

export default SMBPage;
