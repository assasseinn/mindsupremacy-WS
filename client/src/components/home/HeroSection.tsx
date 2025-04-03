import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="hero-pattern pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block bg-[#700027] text-[#f8f9fa] py-1 px-3 rounded-full text-sm font-semibold">
            ANCIENT WISDOM REDISCOVERED
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-[#f8f9fa] leading-tight mb-4">
            Unlock Your Other Self
          </h1>
          
          <p className="text-lg md:text-xl text-[#f8f9fa]/90 mb-8 max-w-2xl mx-auto">
            Discover why this suppressed 1930s masterpiece helped thousands break free from mental slavery and achieve impossible goals
          </p>
          
          <div className="relative mb-8">
            <Link href="/payment">
              <button className="glow-button bg-[#d4af37] hover:bg-yellow-500 text-[#1a2642] text-lg md:text-xl font-montserrat font-bold py-4 px-8 rounded-lg transition-colors">
                Secure Your Copy Now
              </button>
            </Link>
            
            <div className="absolute -top-4 -right-4 bg-[#2e7d32] text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
              91% OFF - LIMITED TIME
            </div>
          </div>
          
          <div className="text-[#f8f9fa]/70 text-sm">
            Join over 10,000+ successful students who transformed their lives
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
