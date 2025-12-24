import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/20 animate-float blur-xl" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-accent/30 animate-float-delayed blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/10 animate-float" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal opacity-0">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent-foreground">
                Dijital Dönüşümünüz Burada Başlıyor
              </span>
            </div>
          </div>

          <h1 className="reveal opacity-0 text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
            Markanızı{" "}
            <span className="text-accent">Dijitale</span>{" "}
            Taşıyoruz
          </h1>

          <p className="reveal opacity-0 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Modern web siteleri, e-ticaret çözümleri ve dijital pazarlama 
            stratejileri ile işletmenizi büyütüyoruz.
          </p>

          <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Ücretsiz Danışmanlık
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Projelerimizi İncele
            </Button>
          </div>

          {/* Stats */}
          <div className="reveal opacity-0 grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-accent">500+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-accent">98%</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Müşteri Memnuniyeti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-accent">10+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
