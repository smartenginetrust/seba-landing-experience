import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
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
      id="iletisim"
      ref={sectionRef}
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="reveal opacity-0 text-3xl md:text-5xl font-extrabold mb-4">
              Projenizi <span className="text-accent">Hayata Geçirelim</span>
            </h2>
            <p className="reveal opacity-0 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Dijital hedeflerinizi gerçekleştirmek için bize ulaşın. Ücretsiz 
              danışmanlık ile projenizi değerlendirelim.
            </p>
          </div>

          <div className="reveal opacity-0 bg-card/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60">E-posta</div>
                    <div className="font-semibold">info@sebaajans.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60">Telefon</div>
                    <div className="font-semibold">+90 532 123 45 67</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60">Adres</div>
                    <div className="font-semibold">İstanbul, Türkiye</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-primary-foreground/80 mb-6">
                  Formu doldurun, 24 saat içinde size geri dönüş yapalım.
                </p>
                <Button variant="hero" size="xl" className="w-full group">
                  Ücretsiz Teklif Al
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
