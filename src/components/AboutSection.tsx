import { useEffect, useRef } from "react";
import { CheckCircle, Users, Award, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Hızlı Teslimat",
    description: "Projelerinizi zamanında ve eksiksiz teslim ediyoruz",
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "Deneyimli tasarımcı ve geliştiricilerden oluşan ekibimiz",
  },
  {
    icon: Award,
    title: "Kalite Odaklı",
    description: "En yüksek standartlarda kaliteli işler üretiyoruz",
  },
  {
    icon: CheckCircle,
    title: "7/24 Destek",
    description: "Sürekli destek ve bakım hizmetleri sunuyoruz",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hakkimizda"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="reveal opacity-0 text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Neden <span className="text-accent">SEBA</span>?
            </h2>
            <p className="reveal opacity-0 text-lg text-muted-foreground mb-8 leading-relaxed">
              10 yılı aşkın deneyimimizle, işletmelerin dijital dönüşümünde güvenilir 
              bir partner olarak yer alıyoruz. Modern teknolojiler ve yaratıcı 
              çözümlerle markanızı öne çıkarıyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="reveal opacity-0 flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal opacity-0 relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
                <div className="text-7xl md:text-8xl font-extrabold text-accent mb-4">
                  500+
                </div>
                <div className="text-2xl font-bold mb-2">
                  Başarılı Proje
                </div>
                <p className="text-primary-foreground/70">
                  Müşterilerimizin başarı hikayeleri bizim motivasyonumuz
                </p>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-3xl font-bold text-accent-foreground">98%</div>
                <div className="text-xs text-accent-foreground/80">Memnuniyet</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl animate-float-delayed border border-border">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground">Yıl Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
