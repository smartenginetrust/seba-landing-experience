import { useEffect, useRef, ReactNode } from "react";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Feature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: ReactNode;
  features: Feature[];
  benefits: string[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  image,
  icon,
  features,
  benefits,
}: ServicePageLayoutProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main ref={sectionRef}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="reveal opacity-0 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Ana Sayfa
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="reveal opacity-0 w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  {icon}
                </div>
                <p className="reveal opacity-0 text-accent font-semibold mb-2">{subtitle}</p>
                <h1 className="reveal opacity-0 text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
                  {title}
                </h1>
                <p className="reveal opacity-0 text-lg text-primary-foreground/80 mb-8 max-w-lg">
                  {description}
                </p>
                <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="group"
                    onClick={() => window.open('https://wa.me/905465451416?text=Merhaba, ' + title + ' hizmeti hakkında bilgi almak istiyorum.', '_blank')}
                  >
                    Teklif Al
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="heroOutline" 
                    size="xl"
                    onClick={() => window.location.href = 'tel:+905465451416'}
                  >
                    Hemen Ara
                  </Button>
                </div>
              </div>
              
              <div className="reveal opacity-0 relative">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-3" />
                <img 
                  src={image} 
                  alt={title}
                  className="relative rounded-3xl shadow-2xl w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="reveal opacity-0 text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Neler <span className="text-accent">Sunuyoruz?</span>
            </h2>
            <p className="reveal opacity-0 text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Size en iyi hizmeti sunmak için kapsamlı çözümler hazırladık
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="reveal opacity-0 bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="reveal opacity-0 text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Neden <span className="text-accent">Bizi Seçmelisiniz?</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="reveal opacity-0 flex items-start gap-3"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="reveal opacity-0 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Ücretsiz Danışmanlık</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Projeniz hakkında ücretsiz danışmanlık almak için hemen bizimle iletişime geçin.
                </p>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/905465451416?text=Merhaba, ücretsiz danışmanlık almak istiyorum.', '_blank')}
                >
                  WhatsApp'tan Yazın
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="reveal opacity-0 text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Projenizi Hayata Geçirelim
            </h2>
            <p className="reveal opacity-0 text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Dijital dönüşüm yolculuğunuzda yanınızda olmaktan mutluluk duyarız. Hemen iletişime geçin!
            </p>
            <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.location.href = 'tel:+905465451416'}
              >
                Hemen Ara: +90 546 545 14 16
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePageLayout;
