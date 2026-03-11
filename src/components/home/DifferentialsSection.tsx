import { Paintbrush, Palette, Package, Award } from "lucide-react";

const differentials = [
  {
    icon: Paintbrush,
    title: "Pintura à Mão",
    description: "Cada peça é pintada artesanalmente com técnicas tradicionais",
  },
  {
    icon: Palette,
    title: "Design Exclusivo",
    description: "Criações únicas que refletem sua personalidade e estilo",
  },
  {
    icon: Package,
    title: "Envio Regional",
    description: "Embalagens especiais para entrega segura em João Pessoa, PB",
  },
  {
    icon: Award,
    title: "Alta Qualidade",
    description: "Porcelana premium com filetes de ouro e acabamento impecável",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
            Por que escolher zlcasa
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-petrol mb-6">
            Nossos Diferenciais
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-6 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                <item.icon size={28} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-petrol mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
