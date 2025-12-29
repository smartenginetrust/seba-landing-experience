import { QrCode } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import serviceQrMenu from "@/assets/service-qr-menu.jpg";

const QrMenuPage = () => {
  const features = [
    {
      title: "Temassız Menü",
      description: "Müşterileriniz telefonlarıyla QR kodu okutarak menünüze anında erişebilir.",
    },
    {
      title: "Anlık Güncelleme",
      description: "Menü değişikliklerini saniyeler içinde yapın, baskı maliyetinden kurtulun.",
    },
    {
      title: "Görsel Zenginlik",
      description: "Yemek fotoğrafları ve detaylı açıklamalarla iştah açıcı bir deneyim sunun.",
    },
    {
      title: "Çoklu Dil Desteği",
      description: "Turistlere yönelik İngilizce, Almanca ve diğer dillerde menü seçenekleri.",
    },
    {
      title: "Kategori Yönetimi",
      description: "Menünüzü ana yemekler, içecekler, tatlılar gibi kategorilere ayırın.",
    },
    {
      title: "Özel Tasarım",
      description: "Restoranınızın konseptine uygun özel tasarım ve renk seçenekleri.",
    },
  ];

  const benefits = [
    "Hijyenik ve temassız deneyim sunarak müşteri güvenliğini artırın",
    "Baskı maliyetlerinden tasarruf edin, menüyü dilediğiniz zaman güncelleyin",
    "Profesyonel görünümle marka imajınızı güçlendirin",
    "Müşteri deneyimini iyileştirerek satışlarınızı artırın",
    "7/24 teknik destek ve eğitim hizmeti alın",
  ];

  return (
    <ServicePageLayout
      title="QR Kodlu Menü"
      subtitle="Restoranlar İçin"
      description="Restoranlar için modern, temassız dijital menü çözümleri. Müşterilerinize hijyenik ve şık bir deneyim sunun."
      image={serviceQrMenu}
      icon={<QrCode className="w-10 h-10 text-accent" />}
      features={features}
      benefits={benefits}
    />
  );
};

export default QrMenuPage;
