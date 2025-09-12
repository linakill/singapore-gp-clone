import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    title: "F1 Singapore Grand Prix 2025: Everything you need to know",
    date: "September 1, 2025",
    excerpt: "The 2025 Formula 1 Singapore Grand Prix promises to be another spectacular night race under the lights. Here's your complete guide to the upcoming event, including ticket information, schedule updates, and what to expect.",
    image: "/lovable-uploads/12aeba39-19b4-48ec-bd13-478d756e96de.png",
    url: "/news/f1-guide-2025"
  },
  {
    id: 2,
    title: "Singapore GP 2025: New track improvements announced",
    date: "August 25, 2025", 
    excerpt: "The Marina Bay Street Circuit will feature several improvements for the 2025 race, including enhanced spectator areas, upgraded facilities, and better accessibility options for fans attending the night race.",
    image: "/lovable-uploads/bc469316-37c9-450a-8836-9525f3397335.png",
    url: "/news/track-improvements"
  },
  {
    id: 3,
    title: "Early bird tickets for Singapore GP 2025 now available",
    date: "September 4, 2025",
    excerpt: "Formula 1 fans can now secure their seats for the 2025 Singapore Grand Prix with early bird pricing. Multiple grandstand options and hospitality packages are available for the highly anticipated street circuit race.",
    image: "/lovable-uploads/42b3bc47-0550-4e5f-9cc4-f6139d85bb70.png",
    url: "/news/early-bird-tickets"
  },
  {
    id: 4,
    title: "F1 2025 season preview: What to expect in Singapore",
    date: "August 19, 2025",
    excerpt: "As the 2025 Formula 1 season approaches, the Singapore Grand Prix remains one of the most challenging and prestigious races on the calendar. The unique night race format continues to test drivers and teams.",
    image: "/lovable-uploads/7903dc52-ed80-418e-8ff5-3ffac7ce5d07.png",
    url: "/news/season-preview"
  },
  {
    id: 5,
    title: "Singapore GP entertainment lineup announced for 2025",
    date: "September 7, 2025",
    excerpt: "The 2025 Singapore Grand Prix will feature an exciting entertainment program alongside the racing action, with world-class performers set to take the stage during the race weekend.",
    image: "/lovable-uploads/74bda01e-2d89-49cf-acfe-28fa48062f55.png",
    url: "/news/entertainment"
  },
  {
    id: 6,
    title: "Marina Bay Circuit: A jewel of street racing",
    date: "August 30, 2025",
    excerpt: "Explore the history and unique characteristics of the Marina Bay Street Circuit, which has been hosting the Singapore Grand Prix since 2008 and remains one of F1's most spectacular venues.",
    image: "/lovable-uploads/dbbd89c1-a104-4456-a891-5a6f1d65fc69.png",
    url: "/news/circuit-history"
  }
];

export const LatestNews = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Latest News
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Link key={article.id} to={article.url}>
              <Card className="group cursor-pointer bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-white/80 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};