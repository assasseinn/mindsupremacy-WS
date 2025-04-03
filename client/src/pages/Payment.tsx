import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { programDetails } from "@/lib/data";
import { CheckCircle, ChevronLeft, Lock, Shield, Zap } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  paymentMethod: z.enum(["card", "upi", "netbanking"])
});

type FormValues = z.infer<typeof formSchema>;

const Payment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      paymentMethod: "card"
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/orders", {
        ...data,
        amount: programDetails.currentPrice
      });
      
      setIsSuccess(true);
      toast({
        title: "Order placed successfully",
        description: "You will receive an email with your audio program shortly.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error processing order",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Complete Your Order | MindSupremacy</title>
        <meta
          name="description"
          content="Secure your copy of the Success Mastery Complete Audio Program at 91% off"
        />
      </Helmet>
      
      <div className="pt-24 pb-16 sacred-bg">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-[#1a2642]">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 order-2 md:order-1">
                  {!isSuccess ? (
                    <>
                      <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-[#1a2642] mb-6">
                        Complete Your Order
                      </h1>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Payment Method</FormLabel>
                                <div className="grid grid-cols-3 gap-4 mt-2">
                                  <Button
                                    type="button"
                                    className={`flex flex-col items-center justify-center h-20 ${
                                      field.value === "card" 
                                        ? "bg-[#1a2642] text-white" 
                                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                                    }`}
                                    onClick={() => field.onChange("card")}
                                  >
                                    <span className="text-xs mb-1">Credit/Debit</span>
                                    <span className="font-semibold">Card</span>
                                  </Button>
                                  
                                  <Button
                                    type="button"
                                    className={`flex flex-col items-center justify-center h-20 ${
                                      field.value === "upi" 
                                        ? "bg-[#1a2642] text-white" 
                                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                                    }`}
                                    onClick={() => field.onChange("upi")}
                                  >
                                    <span className="text-xs mb-1">Google/PhonePe</span>
                                    <span className="font-semibold">UPI</span>
                                  </Button>
                                  
                                  <Button
                                    type="button"
                                    className={`flex flex-col items-center justify-center h-20 ${
                                      field.value === "netbanking" 
                                        ? "bg-[#1a2642] text-white" 
                                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                                    }`}
                                    onClick={() => field.onChange("netbanking")}
                                  >
                                    <span className="text-xs mb-1">Internet</span>
                                    <span className="font-semibold">Banking</span>
                                  </Button>
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            className="w-full glow-button bg-[#d4af37] hover:bg-yellow-500 text-[#1a2642] text-lg font-montserrat font-bold py-3"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Processing..." : "Pay ₹199 Now"}
                          </Button>
                        </form>
                      </Form>
                      
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Lock className="h-4 w-4 mr-1" />
                          <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Shield className="h-4 w-4 mr-1" />
                          <span>60-Day Guarantee</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#2e7d32] rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-[#1a2642] mb-4">
                        Order Confirmed!
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Thank you for your purchase. Your audio program has been sent to your email address.
                      </p>
                      <Link href="/">
                        <Button className="bg-[#1a2642]">
                          Return to Home
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#1a2642] p-8 order-1 md:order-2">
                  <h2 className="text-xl font-montserrat font-bold text-[#f8f9fa] mb-6">
                    Order Summary
                  </h2>
                  
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-[#d4af37] mb-2">Success Mastery Audio Program</h3>
                    <ul className="space-y-2 text-[#f8f9fa]/80 text-sm">
                      {programDetails.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item.split(' - ')[0]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-[#f8f9fa]/80">
                      <span>Original Price:</span>
                      <span className="line-through">₹{programDetails.originalPrice}</span>
                    </div>
                    <div className="flex justify-between text-[#f8f9fa]/80">
                      <span>Discount:</span>
                      <span className="text-[#2e7d32]">-₹{programDetails.savings}</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 mt-2"></div>
                    <div className="flex justify-between font-semibold text-[#f8f9fa]">
                      <span>Total:</span>
                      <span>₹{programDetails.currentPrice}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#d4af37]/15 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Zap className="h-5 w-5 text-[#d4af37] mr-2" />
                      <span className="text-[#d4af37] font-semibold">Instant Digital Delivery</span>
                    </div>
                    <p className="text-[#f8f9fa]/80 text-sm">
                      You'll receive immediate access to all program materials via email after payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
