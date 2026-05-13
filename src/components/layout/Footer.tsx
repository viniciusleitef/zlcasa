import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-petrol text-primary-foreground">
      <div className="container-elegant py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-medium mb-4 text-gold-light">
              zlcasa
            </h3>
            <p className="font-sans text-sm leading-relaxed text-primary-foreground/80">
              Arte em porcelana e cerâmica pintada à mão. Peças exclusivas que
              transformam momentos em memórias.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm tracking-widest uppercase mb-6 text-gold-light">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/colecoes", label: "Coleções" },
                { href: "/atelie", label: "O Ateliê" },
                { href: "/orcamento", label: "Orçamento" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-primary-foreground/70 hover:text-gold-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sans text-sm tracking-widest uppercase mb-6 text-gold-light">
              Coleções
            </h4>
            <ul className="space-y-3">
              {[
                "Religiosas",
                "Mesa Posta",
                "Corporativos",
                "Personalizadas",
              ].map((cat) => (
                <li key={cat}>
                  <span className="font-sans text-sm text-primary-foreground/70">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm tracking-widest uppercase mb-6 text-gold-light">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-gold-light" />
                <a
                  href="https://instagram.com/zl.casa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-primary-foreground/70 hover:text-gold-light transition-colors duration-300"
                >
                  @zl.casa
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-light" />
                <a
                  href="mailto:contato@zlcasa.com.br"
                  className="font-sans text-sm text-primary-foreground/70 hover:text-gold-light transition-colors duration-300"
                >
                  contato@zlcasa.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-light" />
                <span className="font-sans text-sm text-primary-foreground/70">
                  (83) 99859-5225
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-light mt-0.5" />
                <span className="font-sans text-sm text-primary-foreground/70">
                  João Pessoa, PB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} zlcasa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
