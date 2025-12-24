import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-extrabold mb-4">
              <span className="text-accent">SEBA</span>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              Dijital dönüşümünüzde güvenilir partneriniz. Modern web çözümleri 
              ile işletmenizi geleceğe taşıyoruz.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">QR Kodlu Menü</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kurumsal Web Sitesi</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">E-Ticaret</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Dijital Pazarlama</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-background/70">
              <li>info@sebaajans.com</li>
              <li>+90 532 123 45 67</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-background/50 text-sm">
          <p>© 2024 SEBA. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
