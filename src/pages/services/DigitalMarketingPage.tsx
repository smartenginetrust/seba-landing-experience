import { TrendingUp } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceMarketing from "@/assets/service-marketing.jpg";

const DigitalMarketingPage = () => {
  const features = [
    {
      title: "SEO Optimizasyonu",
      description: "Google'da üst sıralara çıkmanız için profesyonel SEO çalışmaları.",
    },
    {
      title: "Google Ads",
      description: "Hedef kitlenize ulaşan etkili Google reklam kampanyaları.",
    },
    {
      title: "Sosyal Medya Reklamları",
      description: "Facebook, Instagram ve LinkedIn reklam yönetimi.",
    },
    {
      title: "İçerik Pazarlama",
      description: "Blog yazıları, infografikler ve değerli içerikler üretimi.",
    },
    {
      title: "E-posta Pazarlama",
      description: "Müşteri sadakati oluşturan e-posta kampanyaları.",
    },
    {
      title: "Analiz ve Raporlama",
      description: "Detaylı performans raporları ve optimizasyon önerileri.",
    },
  ];

  const benefits = [
    "Hedef kitlenize doğrudan ulaşarak satışlarınızı artırın",
    "Marka bilinirliğinizi güçlendirin",
    "Reklam bütçenizi verimli kullanın",
    "Ölçülebilir sonuçlarla yatırım getirinizi görün",
    "Rakip analizi ile stratejik avantaj elde edin",
  ];

  return (
    <ServicePageLayout
      title="Dijital Pazarlama"
      subtitle="Büyüme Stratejileri"
      description="SEO, Google Ads ve sosyal medya reklamları ile işletmenizi büyütün ve hedef kitlenize ulaşın."
      image={serviceMarketing}
      icon={<TrendingUp className="w-10 h-10 text-accent" />}
      features={features}
      benefits={benefits}
    />
  );
};

export default DigitalMarketingPage;
