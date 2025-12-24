import { useEffect, useRef } from "react";
import { QrCode, Globe, ShoppingCart, TrendingUp, Share2, Smartphone } from "lucide-react";
import serviceQrMenu from "@/assets/service-qr-menu.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";

const services = [
  {
    icon: QrCode,
    title: "QR Kodlu Menü",
    description: "Restoranlar için modern, temassız dijital menü çözümleri",
    image: serviceQrMenu,
  },
  {
    icon: Globe,
    title: "Kurumsal Web Sitesi",
    description: "Profesyonel ve etkileyici kurumsal web sitesi tasarımları",
    image: serviceCorporate,
  },
  {
    icon: ShoppingCart,
    title: "E-Ticaret Çözümleri",
    description: "Satışlarınızı artıracak e-ticaret platformları",
    image: serviceEcommerce,
  },
  {
    icon: TrendingUp,
    title: "Dijital Pazarlama",
    description: "SEO, Google Ads ve sosyal medya reklamları ile büyüme",
    image: serviceMarketing,
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description: "Markanızı güçlendiren içerik stratejileri ve yönetim",
    image: serviceSocial,
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android için özel mobil uygulama geliştirme",
    image: serviceMobile,
  },
];

const ServicesSection = () => {
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
      id="hizmetler"
      ref={sectionRef}
      className="py-24 bg-secondary/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="reveal opacity-0 text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            <span className="text-accent">Hizmetlerimiz</span>
          </h2>
          <p className="reveal opacity-0 text-lg text-muted-foreground max-w-2xl mx-auto">
            İşletmenizi dijital dünyada öne çıkaracak kapsamlı çözümler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal opacity-0 group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
