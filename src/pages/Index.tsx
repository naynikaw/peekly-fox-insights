
import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Demo />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
