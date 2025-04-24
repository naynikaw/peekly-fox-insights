
import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
// Testimonials import is removed but the component still exists in the project

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Demo />
      <Benefits />
      {/* Testimonials component is commented out, preserving the code */}
      {/* <Testimonials /> */}
      <CallToAction />
    </Layout>
  );
};

export default Index;
