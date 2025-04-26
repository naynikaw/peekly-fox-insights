
import VerticalTemplate from "@/components/VerticalTemplate";
import { Rocket, Clock, Lightbulb, Zap } from "lucide-react";

const SolopreneursPage = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Time-Saving Insights",
      description: "Get answers in seconds instead of hours spent wrangling spreadsheets and dashboards."
    },
    {
      icon: Lightbulb,
      title: "Opportunity Discovery",
      description: "Uncover hidden patterns and opportunities in your business data without being a data expert."
    },
    {
      icon: Rocket,
      title: "Growth Planning",
      description: "Make confident decisions about where to focus your limited time and resources."
    },
    {
      icon: Zap,
      title: "Quick Pivoting",
      description: "Rapidly test new ideas and get immediate feedback on what's working and what isn't."
    }
  ];

  const sampleQueries = [
    "Which of my services has the highest profit margin?",
    "Compare my revenue growth month-over-month this year",
    "What days of the week do I get the most customer inquiries?",
    "Show me which marketing efforts brought in the most customers"
  ];

  return (
    <VerticalTemplate 
      title="Run Your Business, Not Your Analytics"
      subtitle="Ask questions about your business data in plain English and get visual answers instantly – no data skills required."
      backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
      callToAction="Focus on Growth, Not Data Analysis"
    />
  );
};

export default SolopreneursPage;
