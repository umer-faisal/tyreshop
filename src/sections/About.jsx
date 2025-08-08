import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Clock className="w-8 h-8" />, number: "10+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "5000+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Tire Brands" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "24/7", label: "Emergency Service" }
  ];

  const features = [
    "Genuine products from authorized dealers only",
    "Fast and efficient service guaranteed",
    "Competitive pricing with transparent quotes",
    "Mobile tire fitting service available",
    "Professional installation and balancing",
    "Comprehensive warranty on all services"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
              Your Trusted Tire Professionals Since 2014
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 10 years of dedicated experience in the tire industry, we have built 
              our reputation on three core principles: quality, reliability, and exceptional customer service. 
              Our mission is to provide genuine, high-quality tire products paired with fast, 
              professional installation services.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that your vehicle's safety and performance depend on quality tires. 
              That's why we only work with authorized dealers and certified tire brands, ensuring 
              every product meets the highest industry standards.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div>
            <div className="grid grid-cols-2 gap-6 cursor-pointer">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary-gradient text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="mt-8 bg-white border-0">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold text-gray-700 mb-4">
                  Our Mission
                </h4>
                <p className="text-gray-600 italic leading-relaxed">
                  "To provide every customer with premium tire solutions, exceptional service, 
                  and the peace of mind that comes from working with true professionals."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};



export default About;