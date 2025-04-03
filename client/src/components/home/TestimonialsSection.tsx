import { useRef } from "react";
import { testimonials } from "@/lib/data";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const carouselRef = useRef(null);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#1a2642] text-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            LIVES TRANSFORMED
          </h2>
          <p className="text-lg text-[#f8f9fa]/80 max-w-2xl mx-auto">
            Join thousands who have already unlocked their hidden potential with these timeless principles
          </p>
        </div>
        
        <div className="relative px-4">
          <Carousel
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg h-full">
                    <div className="mb-4">
                      <Quote className="text-[#d4af37] h-8 w-8" />
                    </div>
                    <p className="testimonial-quote text-lg mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center text-[#1a2642] font-bold">
                        {testimonial.initial}
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-[#f8f9fa]/70 text-sm">{testimonial.location}</div>
                      </div>
                      <div className="ml-auto text-xs font-medium bg-[#2e7d32]/20 text-[#2e7d32] px-2 py-1 rounded">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="text-[#f8f9fa]" />
              <CarouselNext className="text-[#f8f9fa]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
