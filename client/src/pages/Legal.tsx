import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Legal = () => {
  const [match, params] = useRoute("/legal/:type");
  const type = params?.type || "terms";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const getTitle = () => {
    switch (type) {
      case "terms":
        return "Terms of Service";
      case "privacy":
        return "Privacy Policy";
      case "refund":
        return "Refund Policy";
      case "disclaimer":
        return "Disclaimer";
      default:
        return "Legal Information";
    }
  };

  const getContent = () => {
    switch (type) {
      case "terms":
        return (
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>Welcome to MindSupremacy ("Company", "we", "our", "us"). These Terms of Service govern your use of our website and audio program products.</p>
            
            <h2>2. Acceptance of Terms</h2>
            <p>By accessing our website and purchasing our products, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the services.</p>
            
            <h2>3. Intellectual Property</h2>
            <p>All content included as part of the Service, including but not limited to audio programs, text, graphics, logos, images, as well as the compilation thereof, and any software used on the website, is the property of MindSupremacy or its suppliers and protected by copyright and other laws.</p>
            
            <h2>4. User Responsibilities</h2>
            <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.</p>
            
            <h2>5. Payment Terms</h2>
            <p>We accept various payment methods for our products. By providing a payment method, you represent that you are authorized to use the designated payment method.</p>
            
            <h2>6. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will provide notice of any changes by updating the "Last Updated" date at the top of this page.</p>
            
            <h2>7. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at support@mindsupremacy.com.</p>
          </div>
        );
      case "privacy":
        return (
          <div className="prose max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you purchase our products or express an interest in obtaining information about us or our products.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
            
            <h2>3. Will Your Information Be Shared With Anyone?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            
            <h2>4. How Long We Keep Your Information</h2>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.</p>
            
            <h2>5. How We Keep Your Information Safe</h2>
            <p>We aim to protect your personal information through a system of organizational and technical security measures.</p>
            
            <h2>6. Your Privacy Rights</h2>
            <p>In some regions, you have rights that allow you greater access to and control over your personal information.</p>
            
            <h2>7. Contact Us</h2>
            <p>If you have questions or comments about this policy, email us at support@mindsupremacy.com.</p>
          </div>
        );
      case "refund":
        return (
          <div className="prose max-w-none">
            <h2>60-Day Money-Back Guarantee</h2>
            <p>We stand behind our products with a 60-day, no-questions-asked guarantee. If you're not completely satisfied with your purchase, simply contact our customer support team within 60 days of your purchase and we'll process a full refund.</p>
            
            <h2>How to Request a Refund</h2>
            <p>To initiate a refund, please email support@mindsupremacy.com with your order number and the email address used for the purchase. No explanation is necessary, though we always appreciate feedback.</p>
            
            <h2>Refund Processing</h2>
            <p>Once your refund request is received, we will process it within 3-5 business days. Depending on your payment method and financial institution, it may take additional time for the refund to appear in your account.</p>
            
            <h2>Digital Product Access After Refund</h2>
            <p>Upon issuing a refund, your access to the digital products will be revoked. We trust our customers to act in good faith regarding our generous refund policy.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about our refund policy, please contact us at support@mindsupremacy.com.</p>
          </div>
        );
      case "disclaimer":
        return (
          <div className="prose max-w-none">
            <h2>Educational Purpose</h2>
            <p>The content provided through MindSupremacy's Success Mastery Audio Program is for educational and informational purposes only. The information provided is not intended to be a substitute for professional advice.</p>
            
            <h2>Results May Vary</h2>
            <p>The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on their background, dedication, desire, and motivation.</p>
            
            <h2>Historical Context</h2>
            <p>Our program is based on principles derived from early 20th-century success literature, which we have interpreted and modernized. While we reference the historical origins of these principles, we make no claims regarding the specific historical figures or texts mentioned.</p>
            
            <h2>No Guarantees</h2>
            <p>There is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings.</p>
            
            <h2>Your Responsibility</h2>
            <p>Your level of success in attaining the results claimed in our materials depends on the time you devote to the program, ideas and techniques mentioned, your finances, knowledge, and various skills. Since these factors differ according to individuals, we cannot guarantee your success or income level.</p>
          </div>
        );
      default:
        return <p>Content not found.</p>;
    }
  };

  return (
    <>
      <Helmet>
        <title>{getTitle()} | MindSupremacy</title>
        <meta
          name="description"
          content={`MindSupremacy ${getTitle()} - Important legal information about our services and products.`}
        />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/legal/terms">
                <Button variant={type === "terms" ? "default" : "outline"}>Terms of Service</Button>
              </Link>
              <Link href="/legal/privacy">
                <Button variant={type === "privacy" ? "default" : "outline"}>Privacy Policy</Button>
              </Link>
              <Link href="/legal/refund">
                <Button variant={type === "refund" ? "default" : "outline"}>Refund Policy</Button>
              </Link>
              <Link href="/legal/disclaimer">
                <Button variant={type === "disclaimer" ? "default" : "outline"}>Disclaimer</Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h1 className="text-3xl font-montserrat font-bold text-[#1a2642] mb-8">
                {getTitle()}
              </h1>
              
              <div className="text-sm text-gray-500 mb-6">
                Last Updated: {new Date().toLocaleDateString()}
              </div>
              
              {getContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;
