import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Clock className="w-8 h-8" />, number: "35+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "5000+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Tire Brands" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "24/7", label: "Emergency Service" }
  ];

  const features = [
    "Genuine tires from authorized dealers",
    "Competitive pricing with full transparency",
    "Fast and efficient service guaranteed",
    "Professional installation & balancing",
    "Mobile tire fitting service available",
    "Comprehensive warranty on all services"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-background scroll-mt-18">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[montserrat]">
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-[montserrat]">
              Your Trusted Tire Experts Since 1989
            </h3>

            <p className="text-base sm:text-lg text-[#4A4A4A] mb-6 sm:mb-8 leading-relaxed font-[montserrat]">
              For over three decades, Ahmed Abdul Wahab has been serving customers with dedication, professionalism, and unmatched
              expertise in the tire industry. As a certified professional with an American Diploma from the ALLEN Group (USA), he has built
              this business on three strong pillars: quality, reliability, and customer trust.
            </p>

            <p className="text-base sm:text-lg text-[#4A4A4A] mb-6 sm:mb-8 leading-relaxed font-[montserrat]">
              Our shop is not just about selling tires—it's about ensuring your vehicle's
              safety, performance, and comfort. From genuine products to professional installation,
              we guarantee the highest industry standards with every service.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 cursor-pointer">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-[#0175B2] border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-5 sm:p-6 text-center font-[montserrat]">
                    <div className="bg-[#FFC107] text-primary-foreground w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFC107] mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#4A4A4A] font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="mt-6 sm:mt-8 bg-white border-0">
              <CardContent className="p-6 sm:p-8 text-center font-[montserrat]">
                <h4 className="text-lg sm:text-xl font-bold text-gray-700 mb-3 sm:mb-4 font-[montserrat]">
                  Our Mission
                </h4>
                <p className="text-gray-600 italic leading-relaxed font-[montserrat]">
                  "To deliver premium tire solutions, professional service, and complete peace of mind—because your journey deserves nothing less"
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