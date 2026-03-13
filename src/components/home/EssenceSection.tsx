import { Link } from "react-router-dom";
import artisanImage from "@/assets/artisan-painting.jpg";

const EssenceSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-elegant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative hover-zoom rounded-sm overflow-hidden shadow-xl">
            <img
              src={artisanImage}
              alt="Artesã pintando porcelana"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petrol/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
              Nossa Essência
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-petrol mb-6 leading-tight">
              Tradição e arte em <br />
              <span className="italic">cada pincelada</span>
            </h2>
            <div className="divider-gold w-16 mb-8" />
            <p className="font-sans text-foreground/70 leading-relaxed mb-6">
              Há mais de 3 anos, o ateliê zlcasa dedica-se à arte da
              pintura em porcelana e cerâmica. Cada peça é cuidadosamente
              desenhada, pintada à mão e queimada em alta temperatura,
              garantindo durabilidade e beleza.
            </p>
            <p className="font-sans text-foreground/70 leading-relaxed mb-8">
              Trabalhamos com técnicas tradicionais europeias, combinando
              filetes de ouro, decalques artísticos e pintura livre para criar
              peças únicas que celebram os momentos mais especiais da vida.
            </p>
            <Link to="/atelie" className="btn-outline">
              Conheça o Ateliê
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
