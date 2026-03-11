import { Link } from "react-router-dom";
import religiousImg from "@/assets/collection-religious.jpg";
import mesaImg from "@/assets/collection-mesa.jpg";
import corporateImg from "@/assets/collection-corporate.jpg";
import personalizedImg from "@/assets/collection-personalized.jpg";

const categories = [
  {
    id: "religiosas",
    title: "Coleções Religiosas",
    subtitle: "Batizados, Primeira Comunhão, Crisma",
    image: religiousImg,
  },
  {
    id: "mesa-posta",
    title: "Mesa Posta",
    subtitle: "Louças para ocasiões especiais",
    image: mesaImg,
  },
  {
    id: "corporativos",
    title: "Presentes Corporativos",
    subtitle: "Personalize com sua marca",
    image: corporateImg,
  },
  {
    id: "personalizadas",
    title: "Peças Personalizadas",
    subtitle: "Exclusividade para seu evento",
    image: personalizedImg,
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
            Nossas Coleções
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-petrol mb-6">
            Categorias em Destaque
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/colecoes#${category.id}`}
              className="group relative aspect-square overflow-hidden bg-background shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol/80 via-petrol/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl text-white mb-2">
                  {category.title}
                </h3>
                <p className="font-sans text-sm text-white/70">
                  {category.subtitle}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-sans text-xs tracking-widest uppercase">
                    Explorar
                  </span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
