import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import EssenceSection from "@/components/home/EssenceSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import InstagramSection from "@/components/home/InstagramSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO />
      <HeroSection />
      <EssenceSection />
      <CategoriesSection />
      <DifferentialsSection />
      <CTASection />
      <InstagramSection />
    </Layout>
  );
};

export default Index;
