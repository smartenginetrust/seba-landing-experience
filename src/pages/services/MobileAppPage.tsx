import { Smartphone } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceMobile from "@/assets/service-mobile.jpg";

const MobileAppPage = () => {
  const features = [
    {
      title: "iOS Uygulama",
      description: "Apple App Store için native iPhone ve iPad uygulamaları.",
    },
    {
      title: "Android Uygulama",
      description: "Google Play Store için native Android uygulamaları.",
    },
    {
      title: "Cross-Platform",
      description: "Tek kod tabanıyla hem iOS hem Android için uygulama.",
    },
    {
      title: "UI/UX Tasarım",
      description: "Kullanıcı odaklı, modern ve akıcı arayüz tasarımları.",
    },
    {
      title: "Backend Geliştirme",
      description: "Güçlü ve ölçeklenebilir sunucu altyapısı.",
    },
    {
      title: "Bakım ve Destek",
      description: "Yayın sonrası güncelleme ve teknik destek hizmetleri.",
    },
  ];

  const benefits = [
    "Müşterilerinizin cebinde yerinizi alın",
    "Push bildirimleriyle doğrudan iletişim kurun",
    "Marka sadakatini artırın",
    "Offline çalışabilirlik ile her an erişilebilir olun",
    "App Store ve Play Store'da görünürlük kazanın",
  ];

  return (
    <ServicePageLayout
      title="Mobil Uygulama"
      subtitle="iOS & Android"
      description="iOS ve Android için özel mobil uygulama geliştirme. Müşterilerinizin cebinde yerinizi alın."
      image={serviceMobile}
      icon={<Smartphone className="w-10 h-10 text-accent" />}
      features={features}
      benefits={benefits}
    />
  );
};

export default MobileAppPage;
