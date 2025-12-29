import { ShoppingCart } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const EcommercePage = () => {
  const features = [
    {
      title: "Ürün Yönetimi",
      description: "Sınırsız ürün ekleme, stok takibi ve kategori yönetimi.",
    },
    {
      title: "Ödeme Entegrasyonu",
      description: "Kredi kartı, havale ve kapıda ödeme seçenekleri.",
    },
    {
      title: "Kargo Entegrasyonu",
      description: "Yurtiçi Kargo, Aras, MNG ve diğer kargo firmalarıyla entegrasyon.",
    },
    {
      title: "Mobil Uyumlu",
      description: "Mobil cihazlarda mükemmel alışveriş deneyimi.",
    },
    {
      title: "Güvenli Altyapı",
      description: "SSL sertifikası ve güvenli ödeme altyapısı.",
    },
    {
      title: "Raporlama",
      description: "Satış, stok ve müşteri raporlarıyla işinizi analiz edin.",
    },
  ];

  const benefits = [
    "7/24 satış yaparak gelirinizi artırın",
    "Türkiye'nin her yerine ürün satın",
    "Düşük işletme maliyetiyle mağaza açın",
    "Müşteri verilerini analiz ederek satışlarınızı optimize edin",
    "Profesyonel destek ekibiyle her zaman yanınızdayız",
  ];

  return (
    <ServicePageLayout
      title="E-Ticaret Çözümleri"
      subtitle="Online Satış Platformu"
      description="Satışlarınızı artıracak, kullanıcı dostu ve güvenli e-ticaret platformları geliştiriyoruz."
      image={serviceEcommerce}
      icon={<ShoppingCart className="w-10 h-10 text-accent" />}
      features={features}
      benefits={benefits}
    />
  );
};

export default EcommercePage;
