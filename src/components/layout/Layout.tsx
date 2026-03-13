import { ReactNode, useEffect  } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

declare global {
  interface Window {
    gtag: (command: string, id: string, config?: any) => void;
  }
}

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  useEffect(() => {
    // Enviar visualização de página para o Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-NDDTGSK086', {
        page_path: location.pathname,
      });
    }

    // Scroll suave para o topo na mudança de rota
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50); // Pequeno delay para garantir que o conteúdo carregou

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
