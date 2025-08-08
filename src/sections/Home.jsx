import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Settings, Smartphone, Award } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Tire Brands",
      description: "Top-quality tires from leading manufacturers worldwide"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Wheel Alignment",
      description: "Precision alignment services for optimal vehicle performance"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tire Repair",
      description: "Expert repair services to extend your tire's lifespan"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tire Fitting",
      description: "Convenient on-site tire fitting at your location"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative flex-1 flex items-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          // style={{ backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="%23000"/><text x="600" y="300" text-anchor="middle" fill="%23fff" font-size="48">Hero Image Placeholder</text></svg>')` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                Tire Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Experience premium tire solutions with over 10+ years of expertise. 
              From premium brands to mobile fitting - we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-gradient hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2bg-primary-gradient hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-section-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700y mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tire services delivered by certified professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-primary-gradient text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
