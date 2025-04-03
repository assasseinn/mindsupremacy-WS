import { CheckCircle } from "lucide-react";
import { Principle } from "@/lib/data";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PrincipleCardProps {
  principle: Principle;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle }) => {
  return (
    <Card className="principle-card border-2 border-[#1a2642]/10 overflow-hidden">
      <div className="h-20 bg-[#1a2642] flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#d4af37] flex items-center justify-center text-[#1a2642] text-xl font-bold">
          {principle.id}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl text-[#1a2642]">{principle.title}</CardTitle>
        <CardDescription>{principle.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p>{principle.longDescription}</p>
        
        <div>
          <h4 className="font-semibold mb-2">Applications:</h4>
          <ul className="space-y-2">
            {principle.applications.map((application, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#d4af37] mr-2 flex-shrink-0 mt-0.5" />
                <span>{application}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="case-study">
            <AccordionTrigger className="text-[#700027] font-semibold">
              Real-World Case Study
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4 bg-[#f8f9fa] rounded-lg">
                <p className="font-semibold mb-1">{principle.caseStudy.name}</p>
                <p className="text-gray-700">{principle.caseStudy.story}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      
      <CardFooter className="bg-[#1a2642]/5 border-t border-[#1a2642]/10 flex justify-end">
        <p className="text-sm italic text-gray-600">Principle {principle.id} of 7</p>
      </CardFooter>
    </Card>
  );
};

export default PrincipleCard;
