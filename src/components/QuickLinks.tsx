import { Card, CardContent } from "@/components/ui/card";
import { Ticket, Users, Leaf, ShoppingBag } from "lucide-react";

const quickLinks = [
  {
    id: 1,
    title: "2025 TICKETS",
    subtitle: "Secure Your Race Experience",
    icon: Ticket,
    link: "/tickets",
    image: "/lovable-uploads/4aee7ba0-866f-45e6-bcaa-9a7b190bc100.png"
  },
  {
    id: 2,
    title: "OFFICIAL SHOP",
    subtitle: "Exclusive F1 Merchandise",
    icon: ShoppingBag,
    link: "/shop",
    image: "/lovable-uploads/ea9ede23-943e-4447-a746-22ca097cfc7d.png"
  }
];

export const QuickLinks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.link}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-80 md:h-96">
                  <img 
                    src={link.image}
                    alt={link.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-12 w-12 mb-4 text-white drop-shadow-lg" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {link.title}
                    </h3>
                    
                    <p className="text-lg text-white/90 transform transition-all duration-300 group-hover:translate-y-[-4px] group-hover:text-white">
                      {link.subtitle}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};