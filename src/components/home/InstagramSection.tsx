import { Instagram } from "lucide-react";
import religiousImg from "@/assets/collection-religious.jpg";
import mesaImg from "@/assets/collection-mesa.jpg";
import corporateImg from "@/assets/collection-corporate.jpg";
import personalizedImg from "@/assets/collection-personalized.jpg";
import artisanImg from "@/assets/artisan-painting.jpg";
import heroImg from "@/assets/hero-porcelain.jpg";

const instagramPosts = [
  { image: heroImg, alt: "Xícara com filetes de ouro" },
  { image: religiousImg, alt: "Coleção religiosa" },
  { image: mesaImg, alt: "Mesa posta elegante" },
  { image: corporateImg, alt: "Presentes corporativos" },
  { image: personalizedImg, alt: "Peças personalizadas" },
  { image: artisanImg, alt: "Pintura à mão" },
];

const InstagramSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram size={24} className="text-gold" />
            <a
              href="https://instagram.com/zl.casa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-lg text-petrol hover:text-gold transition-colors duration-300"
            >
              @zl.casa
            </a>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-petrol mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="font-sans text-foreground/60 max-w-md mx-auto">
            Acompanhe nosso trabalho e inspire-se com nossas criações
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com/zl.casa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-petrol/0 group-hover:bg-petrol/50 transition-all duration-500 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
