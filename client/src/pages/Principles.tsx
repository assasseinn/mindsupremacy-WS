import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import PrincipleCard from "@/components/principles/PrincipleCard";
import LearningJourney from "@/components/principles/LearningJourney";
import { principles } from "@/lib/data";
import { ChevronLeft } from "lucide-react";

const Principles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePrinciple = principles[activeIndex];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeIndex]);

  return (
    <>
      <Helmet>
        <title>7 Forbidden Principles | MindSupremacy</title>
        <meta
          name="description"
          content="Explore the 7 Forbidden Principles of success that were hidden from the public for decades. Learn how to apply these transformative principles in your life."
        />
      </Helmet>
      
      <div className="pt-24 pb-16 sacred-bg">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4 text-[#1a2642]">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1a2642] mb-4">
              The 7 Forbidden Principles
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore each principle in depth to understand how it can transform your mindset and unlock your hidden potential. These are the exact principles used by some of the most successful individuals in history.
            </p>
          </div>
          
          <LearningJourney activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          
          <div className="max-w-4xl mx-auto">
            <PrincipleCard principle={activePrinciple} />
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-montserrat font-bold text-[#1a2642] mb-4">
              Ready to Master All 7 Principles?
            </h3>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Get complete access to all audio programs, implementation guides, and bonus materials to fully transform your life.
            </p>
            <Link href="/payment">
              <Button className="bg-[#d4af37] hover:bg-yellow-500 text-[#1a2642] font-semibold py-2 px-6">
                Secure Your Copy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Principles;
