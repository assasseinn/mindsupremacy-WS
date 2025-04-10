import { Link } from "wouter";
import { programDetails } from "@/lib/data";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-[#700027] text-[#f8f9fa]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
          Don't Let Your Other Self Hold You Back
        </h2>
        
        <p className="text-lg text-[#f8f9fa]/90 max-w-2xl mx-auto mb-8">
          Join thousands who have already unlocked their true potential with these timeless principles.
        </p>
        
        <div className="relative mb-8">
          <Link href="/payment" className="glow-button inline-block bg-[#d4af37] hover:bg-yellow-500 text-[#1a2642] text-xl font-montserrat font-bold py-4 px-8 rounded-lg transition-colors">
            Secure Your Copy Now
          </Link>
        </div>
        
        <p className="text-[#f8f9fa]/70">
          Only <strong>{programDetails.copiesLeft} copies</strong> left at this special price of <strong>₹{programDetails.currentPrice}</strong>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
