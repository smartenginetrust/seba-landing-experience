import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "Lezzet Restoran",
    role: "İşletme Sahibi",
    content: "QR kodlu menü sistemimiz sayesinde müşteri memnuniyetimiz arttı. SEBA ekibi çok profesyonel çalıştı, her aşamada destek oldular.",
    rating: 5,
    avatar: "AY",
  },
  {
    name: "Elif Kaya",
    company: "Kaya Holding",
    role: "Pazarlama Müdürü",
    content: "Kurumsal web sitemiz tam istediğimiz gibi oldu. Modern tasarım ve hızlı teslimat ile beklentilerimizin üzerinde bir iş çıkardılar.",
    rating: 5,
    avatar: "EK",
  },
  {
    name: "Mehmet Demir",
    company: "Demir E-Ticaret",
    role: "Kurucu",
    content: "E-ticaret sitemiz sayesinde satışlarımız %150 arttı. SEO ve dijital pazarlama desteği ile online varlığımız güçlendi.",
    rating: 5,
    avatar: "MD",
  },
  {
    name: "Zeynep Aksoy",
    company: "Aksoy Danışmanlık",
    role: "Genel Müdür",
    content: "Sosyal medya yönetimimizi SEBA'ya devrettik ve takipçi sayımız 3 ayda 5 katına çıktı. Harika bir ekip!",
    rating: 5,
    avatar: "ZA",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="reveal opacity-0 text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Müşterilerimiz <span className="text-accent">Ne Diyor?</span>
          </h2>
          <p className="reveal opacity-0 text-lg text-muted-foreground max-w-2xl mx-auto">
            Birlikte çalıştığımız işletmelerin başarı hikayeleri
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal opacity-0 bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="reveal opacity-0 relative">
            <div className="bg-card rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-accent/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="text-sm text-muted-foreground">
                {testimonials[activeIndex].role}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-accent w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center shadow-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
