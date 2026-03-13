import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import artisanImg from "@/assets/artisan-painting.jpg";
import heroImg from "@/assets/hero-porcelain.jpg";
import mesaImg from "@/assets/collection-mesa.jpg";
import { Flame, Clock, Heart, Sparkles } from "lucide-react";

const processSteps = [
  {
    icon: Sparkles,
    title: "Desenho e Planejamento",
    description:
      "Cada peça começa com um desenho personalizado, respeitando sua visão e necessidades.",
  },
  {
    icon: Heart,
    title: "Pintura à Mão",
    description:
      "Artesãs experientes aplicam cada pincelada com precisão e carinho, usando tintas especiais para cerâmica.",
  },
  {
    icon: Flame,
    title: "Queima em Alta Temperatura",
    description:
      "As peças são queimadas a mais de 800°C, garantindo durabilidade e fixação permanente das cores.",
  },
  {
    icon: Clock,
    title: "Acabamento e Controle",
    description:
      "Cada peça passa por rigoroso controle de qualidade antes de ser embalada com cuidado.",
  },
];

const Atelier = () => {
  return (
    <Layout>
      <SEO 
        title="O Ateliê | Nossa História e Processo"
        description="Conheça a história da zlcasa e nosso processo de pintura artesanal em porcelana. Tradição europeia e cuidado em cada pincelada."
        path="/atelie"
      />
      {/* Hero */}
      <section className="relative py-32 bg-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container-elegant relative z-10 text-center">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
            Conheça Nossa História
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-petrol mb-6">
            O Ateliê
          </h1>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className="font-sans text-foreground/70 max-w-xl mx-auto">
            Um espaço onde tradição e arte se encontram para criar peças que
            transcendem o tempo.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
                Nossa História
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-petrol mb-6 leading-tight">
                Mais de uma década <br />
                <span className="italic">dedicados à arte</span>
              </h2>
              <div className="divider-gold w-16 mb-8" />
              <div className="space-y-6 font-sans text-foreground/70 leading-relaxed">
                <p>
                  O ateliê zlcasa nasceu do amor pela arte e pela tradição da
                  pintura em porcelana. Fundado com a missão de preservar
                  técnicas centenárias europeias, nosso espaço é um refúgio de
                  criatividade e dedicação.
                </p>
                <p>
                  Cada peça que sai do nosso ateliê carrega a história de mãos
                  habilidosas que transformam porcelana branca em verdadeiras
                  obras de arte. Trabalhamos com paixão, respeitando o tempo que
                  cada criação exige.
                </p>
                <p>
                  Acreditamos que a porcelana pintada à mão tem o poder de
                  eternizar momentos especiais, tornando batizados, casamentos e
                  celebrações ainda mais memoráveis.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="hover-zoom rounded-sm overflow-hidden shadow-xl">
                <img
                  src={artisanImg}
                  alt="Ateliê zlcasa"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 rounded-full -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-petrol/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-cream">
        <div className="container-elegant">
          <div className="text-center mb-16">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
              Feito à Mão
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-petrol mb-6">
              Nosso Processo Artesanal
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-background border border-gold/30 mb-6">
                  <step.icon size={32} className="text-gold" strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-petrol text-white text-sm font-sans flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-petrol mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center mb-12">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
              Nosso Espaço
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-petrol mb-6">
              Galeria do Ateliê
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hover-zoom overflow-hidden shadow-lg md:col-span-2 md:row-span-2">
              <img
                src={artisanImg}
                alt="Artesã trabalhando"
                className="w-full h-full object-cover aspect-square md:aspect-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="hover-zoom overflow-hidden shadow-lg">
              <img
                src={heroImg}
                alt="Peça finalizada"
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="hover-zoom overflow-hidden shadow-lg">
              <img
                src={mesaImg}
                alt="Coleção mesa posta"
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-petrol text-center">
        <div className="container-elegant">
          <h2 className="font-serif text-3xl text-white mb-6">
            Quer conhecer mais sobre nosso trabalho?
          </h2>
          <p className="font-sans text-white/70 mb-8 max-w-md mx-auto">
            Entre em contato e agende uma visita ao nosso ateliê ou solicite um
            orçamento personalizado.
          </p>
          <Link
            to="/orcamento"
            className="inline-block bg-gold text-petrol px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-light"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Atelier;
