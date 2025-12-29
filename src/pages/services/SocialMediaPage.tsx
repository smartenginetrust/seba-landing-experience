import { Share2 } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceSocial from "@/assets/service-social.jpg";

const SocialMediaPage = () => {
  const features = [
    {
      title: "İçerik Üretimi",
      description: "Markanıza uygun yaratıcı ve dikkat çekici içerikler.",
    },
    {
      title: "Hesap Yönetimi",
      description: "Instagram, Facebook, Twitter ve LinkedIn hesap yönetimi.",
    },
    {
      title: "Topluluk Yönetimi",
      description: "Takipçi etkileşimi ve yorum yönetimi.",
    },
    {
      title: "Görsel Tasarım",
      description: "Profesyonel grafik tasarım ve video içerikler.",
    },
    {
      title: "Influencer İşbirlikleri",
      description: "Markanız için uygun influencer eşleştirmeleri.",
    },
    {
      title: "Aylık Raporlama",
      description: "Detaylı performans analizleri ve büyüme raporları.",
    },
  ];

  const benefits = [
    "Marka bilinirliğinizi sosyal medyada artırın",
    "Hedef kitlenizle güçlü bir bağ kurun",
    "Düzenli ve profesyonel içerik akışı sağlayın",
    "Rakiplerinizin önüne geçin",
    "Zamanınızı core işinize ayırın, sosyal medyayı bize bırakın",
  ];

  return (
    <ServicePageLayout
      title="Sosyal Medya Yönetimi"
      subtitle="Marka İletişimi"
      description="Markanızı güçlendiren içerik stratejileri ve profesyonel sosyal medya yönetimi hizmetleri."
      image={serviceSocial}
      icon={<Share2 className="w-10 h-10 text-accent" />}
      features={features}
      benefits={benefits}
    />
  );
};

export default SocialMediaPage;
