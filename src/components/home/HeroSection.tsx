import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-porcelain.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Porcelana artesanal zlcasa"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-petrol mb-6 opacity-0 animate-fade-in-slow" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          Arte em Porcelana e Cerâmica
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-petrol leading-tight mb-8">
          Peças exclusivas que
          <br />
          <span className="italic">contam histórias</span>
        </h1>
        <div className="divider-gold w-24 mx-auto mb-8" />
        <p className="font-sans text-lg text-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
          A arte de transformar porcelana em memórias. Cada peça é pintada à mão
          com dedicação e carinho.
        </p>
        <Link
          to="/colecoes"
          className="inline-block btn-primary"
        >
          Ver Coleções
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-slow" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
        <span className="font-sans text-xs tracking-widest uppercase text-petrol/60">
          Explore
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
