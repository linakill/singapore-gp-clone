import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Zap, Users, Target, Award, Download } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-800/80 to-teal-900/90" />
        <div className="absolute inset-0 bg-[url('https://storage.singaporegp.sg/web/2025/sustainability/track-background.jpg')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            SUSTAINABILITY
          </h1>
          <p className="text-xl md:text-3xl font-light mb-8 max-w-4xl mx-auto">
            Racing Towards a Greener Future
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Award className="mr-2 h-5 w-5" />
              FIA 3 Star Accredited
            </Badge>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Environmental Commitment
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The Singapore Grand Prix is committed to becoming a carbon neutral event by 2030, aligning with Formula 1's sustainability goals and Singapore's Green Plan 2030.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-foreground">2030 Goal</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Achieve carbon neutrality by implementing comprehensive emission reduction strategies and sustainable practices across all operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-foreground">50% Reduction</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Halve energy emissions from Scope 1 and 2 by 2028 through renewable energy adoption and efficiency improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-foreground">FIA 3 Star</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Achieved the highest level of environmental sustainability recognition from the motorsport governing body.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            Key Sustainability Pillars
          </h2>

          <div className="space-y-16">
            {/* Pillar 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold text-foreground">
                    Reducing Carbon Footprint
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We pledge to halve our energy emissions from Scope 1 and 2 by 2028. Our focus includes energy reduction, increasing renewable energy sources, and utilizing Renewable Energy Certificates for unavoidable emissions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Gradual phase-out of diesel generators</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Introduction of alternative fuels like hydrotreated vegetable oil</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">100% LED track lighting implementation</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl flex items-center justify-center">
                  <Zap className="h-32 w-32 text-green-400/60" />
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-3xl flex items-center justify-center">
                  <Leaf className="h-32 w-32 text-blue-400/60" />
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold text-foreground">
                    Holistic Approach to Sustainability
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to adopting a circular economy approach, working with stakeholders to ensure holistic sustainability through-the-line. Materials are reused, resources sourced sustainably, and waste streams streamlined.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Eliminated 160,000 single-use plastic bottles compared to 2019</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Solar-powered water efficient portable toilets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Responsible procurement processes throughout supply chain</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold text-foreground">
                    Social & Community Impact
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the unifying power of sport to grow education, employment and volunteering opportunities. We remain committed to having an equal, diverse and inclusive talent pool.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Supported local economy through 800+ Singapore-based companies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Robust annual outreach campaigns and community engagement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Equal, diverse and inclusive talent development programs</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl flex items-center justify-center">
                  <Users className="h-32 w-32 text-purple-400/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Report */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Environmental Report
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Download our comprehensive Environmental, Sustainability & Governance Report to learn more about our sustainability initiatives and achievements.
            </p>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg px-8 py-4"
              asChild
            >
              <a 
                href="https://storage.singaporegp.sg/web/2024/sustainability/2022-sgp-esg-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download ESG Report 2022</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;