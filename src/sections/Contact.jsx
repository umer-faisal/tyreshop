import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Raja Center, Shareefabad, Block-1, F.B Area, Karachi"],
      action: () => window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115797.13318395632!2d66.91211694335936!3d24.909562499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0564686eab%3A0xbcebc5f9977467a1!2sNew%20Wheels!5e0!3m2!1sen!2s!4v1754725261822!5m2!1sen!2s", "_blank")
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+92 321 2190002"],
      action: () => window.open("tel:+923212190002", "_self")
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+92 321 2190002"],
      action: () => window.open("https://wa.me/+923212190002", "_blank")
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Emergency Only"]
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-section-gradient scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our tire experts. We're here to help with all your tire needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6 sm:mb-8">
              Get In Touch
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${info.action ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                  onClick={info.action}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start space-x-4 mt-4 sm:mt-6">
                      <div className="bg-[#FFC107] text-primary-foreground p-3 rounded-lg flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-1 sm:mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                className= "border-primary !bg-[#0175B2] text-primary hover:!bg-[#FFC107] hover:text-primary-foreground flex-1 w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/+923212190002", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button 
                variant="outline" 
                className="border-primary  text-[#0175B2] hover:bg-[#FFC107] hover:text-primary-foreground flex-1 w-full sm:w-auto"
                onClick={() => window.open("tel:+923212190002", "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card-gradient border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-[#FFC107]" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 border-border focus:ring-primary focus:border-primary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-card-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 border-border focus:ring-primary focus:border-primary"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-card-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 border-border focus:ring-primary focus:border-primary resize-none"
                      placeholder="Tell us about your tire needs, questions, or how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full !bg-[#0175B2]   hover:!bg-[#FFC107]  py-3  sm:text-lg font-semibold  transition-all duration-300"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 2-4 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
