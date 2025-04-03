import { Link } from "wouter";
import { Mail, Smartphone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a2642] py-12 text-[#f8f9fa]/70">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-[#d4af37] font-montserrat font-bold text-xl mb-4">MindSupremacy</div>
            <p className="mb-4">Master Your Mind, Master Your Life</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#f8f9fa] hover:text-[#d4af37] transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#f8f9fa] hover:text-[#d4af37] transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#f8f9fa] hover:text-[#d4af37] transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#f8f9fa] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
              <li><a href="/#principles" className="hover:text-[#d4af37] transition-colors">Principles</a></li>
              <li><a href="/#testimonials" className="hover:text-[#d4af37] transition-colors">Testimonials</a></li>
              <li><a href="/#faq" className="hover:text-[#d4af37] transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#f8f9fa] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="hover:text-[#d4af37] transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/refund" className="hover:text-[#d4af37] transition-colors">Refund Policy</Link></li>
              <li><Link href="/legal/disclaimer" className="hover:text-[#d4af37] transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#f8f9fa] mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                support@mindsupremacy.com
              </li>
              <li className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                +91 98765 43210
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} MindSupremacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
