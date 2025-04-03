import HeroSection from "@/components/home/HeroSection";
import PrinciplesSection from "@/components/home/PrinciplesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProgramValueSection from "@/components/home/ProgramValueSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MindSupremacy - Master Your Mind, Master Your Life</title>
        <meta
          name="description"
          content="Discover why this suppressed 1930s masterpiece helped thousands break free from mental slavery and achieve impossible goals"
        />
        <meta property="og:title" content="MindSupremacy - Unlock Your Other Self" />
        <meta
          property="og:description"
          content="Ancient wisdom rediscovered: Learn the 7 forbidden principles of success that the elite have kept hidden"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="pt-16">
        <HeroSection />
        <PrinciplesSection />
        <TestimonialsSection />
        <ProgramValueSection />
        <FAQSection />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
