import { Link } from "wouter";
import { CheckCircle, Lock, Shield, Zap } from "lucide-react";
import { programDetails } from "@/lib/data";

const ProgramValueSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 sacred-bg">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1a2642] mb-6">
                Success Mastery Complete Audio Program
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#700027]">What's Inside:</h3>
                <ul className="space-y-4">
                  {programDetails.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#d4af37] mr-2 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/-\s([^:]+):/, '<span class="font-semibold">$1</span> -') }} />
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-6 mb-8">
                <div className="flex flex-col items-center">
                  <Lock className="h-10 w-10 text-[#1a2642] mb-2" />
                  <span className="text-sm text-gray-600">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="h-10 w-10 text-[#1a2642] mb-2" />
                  <span className="text-sm text-gray-600">Money Back Guarantee</span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="h-10 w-10 text-[#1a2642] mb-2" />
                  <span className="text-sm text-gray-600">Instant Access</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a2642] p-8 md:p-12 flex flex-col">
              <div className="bg-[#d4af37]/15 rounded-lg p-6 mb-6">
                <div className="text-xl font-semibold mb-1 text-[#d4af37]">60-Day Money-Back "Soul" Guarantee</div>
                <p className="text-[#f8f9fa]/80">
                  If you don't feel a profound transformation within 60 days, we'll refund your investment with no questions asked.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="text-[#f8f9fa]/70 text-lg mb-2">Regular Price:</div>
                <div className="line-through text-[#f8f9fa]/50 text-2xl">₹{programDetails.originalPrice}</div>
              </div>
              
              <div className="mb-6">
                <div className="text-[#d4af37] text-lg mb-2">Today's Special Price:</div>
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-[#f8f9fa]">₹{programDetails.currentPrice} <span className="text-lg">only</span></div>
                <div className="mt-2 text-[#2e7d32] font-semibold">Save ₹{programDetails.savings}</div>
              </div>
              
              <div className="mb-8 flex items-center text-white bg-[#700027]/50 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Only <strong>{programDetails.copiesLeft} copies</strong> left at this price</span>
              </div>
              
              <Link href="/payment">
                <button className="glow-button bg-[#d4af37] hover:bg-yellow-500 text-[#1a2642] text-xl font-montserrat font-bold py-4 px-8 rounded-lg transition-colors mb-4 w-full">
                  Secure Your Copy Now
                </button>
              </Link>
              
              <div className="text-center text-[#f8f9fa]/70 text-sm">
                Instant delivery via email after payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramValueSection;
