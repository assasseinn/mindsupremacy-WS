import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { principles } from "@/lib/data";

const PrinciplesSection = () => {
  return (
    <section id="principles" className="py-16 md:py-24 sacred-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1a2642] mb-4">
            Master These 7 Forbidden Principles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles have been guarded for decades, now finally revealed through this exclusive audio program
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {principles.map((principle) => (
            <div key={principle.id} className="principle-card bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-24 bg-[#1a2642] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center text-[#1a2642] text-2xl font-bold">
                  {principle.id}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-[#1a2642] mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/principles">
            <a className="inline-flex items-center text-[#700027] hover:text-[#700027]/80 font-semibold transition-colors">
              Discover All 7 Principles
              <ArrowRight className="h-5 w-5 ml-1" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
