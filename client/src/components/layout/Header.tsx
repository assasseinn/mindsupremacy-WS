import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const closeSheet = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "FAQ" }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location !== "/") {
      window.location.href = id;
      return;
    }
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      closeSheet();
    }
  };

  return (
    <header className="bg-[#1a2642] fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-[#d4af37] font-montserrat font-bold text-xl md:text-2xl">MindSupremacy</div>
        </Link>
        
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-[#f8f9fa] hover:text-[#d4af37] transition-colors"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Link href="/payment">
            <Button className="ml-4 bg-[#d4af37] hover:bg-[#b3952f] text-[#1a2642] font-semibold">
              Get Access Now
            </Button>
          </Link>
        </nav>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-[#f8f9fa]">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#1a2642] text-[#f8f9fa] w-[300px]">
            <div className="flex flex-col h-full">
              <div className="text-[#d4af37] font-montserrat font-bold text-xl mb-8 mt-6">
                MindSupremacy
              </div>
              
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#f8f9fa] hover:text-[#d4af37] transition-colors text-lg"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
                <Link href="/payment" onClick={closeSheet}>
                  <Button className="w-full mt-4 bg-[#d4af37] hover:bg-[#b3952f] text-[#1a2642] font-semibold">
                    Get Access Now
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
