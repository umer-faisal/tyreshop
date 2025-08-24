import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Settings, Hammer, CircleDotDashed } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const services = [
    {
      icon: <CircleDotDashed className="w-8 h-8" />,
      title: "Trusted Brands",
      description: "Top-quality tires from trusted global manufacturers."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Perfect Balance",
      description: "Accurate alignment for a smoother, safer drive."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Quick Fix",
      description: "Quick and lasting repair solutions for damaged tires."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Fitted Right",
      description: "Quick and lasting repair solutions for damaged tires."
    }
  ];

  // Carousel images (7 slides)
  const slides = [
    { src: "/images/winda.png", alt: "Winda" },
    { src: "/images/yokohama.png", alt: "Yokohama" },
    { src: "/images/wanda.png", alt: "wanda" },
    { src: "/images/Lassa.png", alt: "Lassa" },
    { src: "/images/Dunlop.png", alt: "Dunlop" },
    { src: "/images/GT-Radial.png", alt: "GT Radial" },
    { src: "/images/nankang.png", alt: "Nankang" }
  ];

  // Grouping logic
  const firstGroup = slides.slice(0, 5); // pehle 5
  const secondGroup = [...slides.slice(5), ...slides.slice(0, 3)]; // baaki 2 + pehle 3
  const groupedSlides = [firstGroup, secondGroup];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStartXRef = useRef(null);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % groupedSlides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length);
  };

  // Auto-play
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // har 3 sec me change
    return () => clearInterval(intervalId);
  }, [groupedSlides.length]);

  // Swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(deltaX) < 50) return;
    if (deltaX < 0) {
      goToNextSlide();
    } else {
      goToPrevSlide();
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative flex-1 flex items-center bg-[#01639A] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] "
          style={{
            backgroundImage: "url(/images/hero2.jpeg)", // image path
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-50 mb-6 leading-tight font-[montserrat]">
              Premium Tire &
              <span className="text-transparent bg-clip-text bg-stone-50 !font-[montserrat]">
               <br /> Wheel Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-50 mb-8 max-w-2xl leading-relaxed font-[montserrat]">
              Your trusted partner for quality tires, expert fitting & wheel solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-[montserrat]">
              <Button
                onClick={() => window.location.href = "#form-title"}
                size="lg"
                className="font-[montserrat] border-2 !bg-[#01639A] hover:!bg-[#FFC107]  px-8 py-3 text-lg font-semibold shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </Button>
              <Button
                onClick={() => window.location.href = "#services"}
                size="lg"
                className="font-[montserrat] border-2 !bg-[#01639A] hover:!bg-[#FFC107] px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="!bg-section-gradient py-20 " id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 !font-[montserrat]">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 !font-[montserrat]">
              What We Offer
            </h2>
            <div className="w-[160px] h-1 bg-[#FFC107] mx-auto mb-8"></div>
            <p className="text-xl !text-[black] text-muted-foreground max-w-2xl mx-auto font-[montserrat]">
              Comprehensive tire & wheel solutions trusted by thousands of customers.
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="!bg-[white] cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group font-[montserrat]"
              >
                <CardContent className="p-8 text-center mt-[20px] font-[montserrat]">
                  <div className="mt- bg-[#FFC107] text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 font-[montserrat]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4 font-[montserrat] !text-[black]">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-[montserrat] !text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="bg-background py-12 sm:pt-[30px] pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground !font-[montserrat]">Our Partners</h2>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto mt-3"></div>
          </div>
          <div
            className="relative cursor-pointer"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
              >
                {groupedSlides.map((group, gIdx) => (
                  <div key={gIdx} className="min-w-full select-none bg-white">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center py-6">
                      {group.map((slide, idx) => (
                        <div key={idx} className="w-full flex items-center justify-center">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain opacity-90 hover:opacity-100 hover:grayscale-0 transition"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls removed as per request */}

            {/* Dots */}
            <div className="mt-2 flex items-center justify-center gap-2">
              {groupedSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-2 rounded-full transition-all ${idx === currentSlideIndex ? 'bg-[#FFC107] w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setCurrentSlideIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
