import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-petrol relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container-elegant relative z-10 text-center">
        <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-light mb-4 block">
          Peça Sob Medida
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight">
          Transforme seu evento em algo{" "}
          <span className="italic text-gold-light">inesquecível</span>
        </h2>
        <p className="font-sans text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
          Batizados, casamentos, eventos corporativos ou presentes especiais.
          Criamos peças exclusivas para celebrar os momentos mais importantes.
        </p>
        <Link
          to="/orcamento"
          className="inline-block bg-gold text-petrol px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-light"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
