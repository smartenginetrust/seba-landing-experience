import { Globe } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceCorporate from "@/assets/service-corporate.jpg";

const CorporateWebPage = () => {
  const features = [
    {
      title: "Modern Tasarım",
      description: "Sektörünüze uygun, çağdaş ve profesyonel web sitesi tasarımları.",
    },
    {
      title: "Mobil Uyumluluk",
      description: "Tüm cihazlarda mükemmel görünen responsive tasarım.",
    },
    {
      title: "SEO Optimizasyonu",
      description: "Google'da üst sıralarda yer almanız için SEO uyumlu altyapı.",
    },
    {
      title: "Hızlı Yükleme",
      description: "Optimize edilmiş kodlama ile hızlı açılan web siteleri.",
    },
    {
      title: "Admin Paneli",
      description: "İçeriklerinizi kolayca yönetebileceğiniz kullanıcı dostu panel.",
    },
    {
      title: "SSL Sertifikası",
      description: "Güvenli bağlantı ile ziyaretçilerinizin güvenini kazanın.",
    },
  ];

  const benefits = [
    "Profesyonel görünümle kurumsal kimliğinizi güçlendirin",
    "7/24 erişilebilir online vitrininiz olsun",
    "Potansiyel müşterilerinize kolayca ulaşın",
    "Rakiplerinizin önüne geçin",
    "Sürekli teknik destek ve bakım hizmeti alın",
  ];

  return (
    <ServicePageLayout
      title="Kurumsal Web Sitesi"
      subtitle="Profesyonel Tasarım"
      description="Firmanızı en iyi şekilde temsil edecek, profesyonel ve etkileyici kurumsal web sitesi tasarımları."
      image={serviceCorporate}
      icon={<Globe className="w-10 h-10 text-accent" />}
      features={features}
      benefits={benefits}
    />
  );
};

export default CorporateWebPage;
