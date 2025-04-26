
import VerticalTemplate from "@/components/VerticalTemplate";
import { ShoppingCart, BarChart, Search, Clock } from "lucide-react";

const EcommercePage = () => {
  const benefits = [
    {
      icon: ShoppingCart,
      title: "Product Performance Insights",
      description: "Instantly understand which products are driving your revenue with natural language queries."
    },
    {
      icon: BarChart,
      title: "Campaign ROI Analysis",
      description: "Compare marketing campaign performance across multiple channels to optimize your ad spend."
    },
    {
      icon: Search,
      title: "Customer Behavior Patterns",
      description: "Discover shopping patterns and customer segments without complex data analysis."
    },
    {
      icon: Clock,
      title: "Seasonal Trend Detection",
      description: "Identify seasonal trends and prepare your inventory for demand spikes ahead of time."
    }
  ];

  const sampleQueries = [
    "Which product categories had the highest conversion rate last quarter?",
    "Compare our customer retention rate to industry benchmarks",
    "What marketing channel brought in the most high-value customers?",
    "Show me the correlation between shipping times and customer reorders"
  ];

  return (
    <VerticalTemplate 
      title="Scale Smarter with Instant E-Commerce Insights"
      subtitle="Ask questions about your sales, inventory, and customer data in plain English and get visual answers in seconds."
      backgroundImage="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      benefits={benefits}
      sampleQueries={sampleQueries}
    />
  );
};

export default EcommercePage;
