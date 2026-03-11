import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import religiousImg from "@/assets/collection-religious.jpg";
import mesaImg from "@/assets/collection-mesa.jpg";
import corporateImg from "@/assets/collection-corporate.jpg";
import personalizedImg from "@/assets/collection-personalized.jpg";
import heroImg from "@/assets/hero-porcelain.jpg";
import artisanImg from "@/assets/artisan-painting.jpg";

const collections = [
  {
    id: "religiosas",
    title: "Coleções Religiosas",
    description:
      "Peças especiais para batizados, primeira comunhão, crisma e outros sacramentos. Cada item é criado para celebrar a fé com elegância e tradição.",
    items: [
      { image: religiousImg, title: "Kit Batizado Clássico" },
      { image: heroImg, title: "Cálice Primeira Comunhão" },
      { image: personalizedImg, title: "Terço em Porcelana" },
    ],
  },
  {
    id: "mesa-posta",
    title: "Mesa Posta",
    description:
      "Louças sofisticadas para transformar suas refeições em momentos especiais. Pratos, xícaras, bowls e acessórios com acabamento impecável.",
    items: [
      { image: mesaImg, title: "Aparelho de Jantar Ouro" },
      { image: heroImg, title: "Jogo de Chá Clássico" },
      { image: corporateImg, title: "Conjunto Café Gourmet" },
    ],
  },
  {
    id: "corporativos",
    title: "Presentes Corporativos",
    description:
      "Brindes exclusivos para empresas que desejam presentear com sofisticação. Personalizamos com sua logo e identidade visual.",
    items: [
      { image: corporateImg, title: "Canecas Personalizadas" },
      { image: artisanImg, title: "Porta-joias Executivo" },
      { image: heroImg, title: "Kit Welcome Premium" },
    ],
  },
  {
    id: "personalizadas",
    title: "Peças Personalizadas",
    description:
      "Criações exclusivas para seu evento. Casamentos, aniversários, bodas e datas especiais merecem lembranças únicas.",
    items: [
      { image: personalizedImg, title: "Lembrancinha Casamento" },
      { image: religiousImg, title: "Mini Pratos Iniciais" },
      { image: mesaImg, title: "Conjunto Personalizado" },
    ],
  },
];

const Collections = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="container-elegant text-center">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
            Portfólio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-petrol mb-6">
            Nossas Coleções
          </h1>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className="font-sans text-foreground/70 max-w-xl mx-auto">
            Explore nossa galeria de peças exclusivas, todas pintadas à mão com
            técnicas tradicionais e acabamento em ouro.
          </p>
        </div>
      </section>

      {/* Collections */}
      {collections.map((collection, index) => (
        <section
          key={collection.id}
          id={collection.id}
          className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-cream"}`}
        >
          <div className="container-elegant">
            {/* Collection Header */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl text-petrol mb-4">
                {collection.title}
              </h2>
              <div className="divider-gold w-16 mb-6" />
              <p className="font-sans text-foreground/70 max-w-2xl">
                {collection.description}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collection.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group relative overflow-hidden bg-white shadow-lg"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-petrol/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      <h3 className="font-serif text-xl text-white mb-2">
                        {item.title}
                      </h3>
                      <Link
                        to="/orcamento"
                        className="font-sans text-xs tracking-widest uppercase text-gold-light hover:text-white transition-colors duration-300"
                      >
                        Solicitar Orçamento →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-petrol text-center">
        <div className="container-elegant">
          <h2 className="font-serif text-3xl text-white mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="font-sans text-white/70 mb-8 max-w-md mx-auto">
            Criamos peças exclusivas sob encomenda. Entre em contato e conte-nos
            sobre seu projeto.
          </p>
          <Link
            to="/orcamento"
            className="inline-block bg-gold text-petrol px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-light"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
