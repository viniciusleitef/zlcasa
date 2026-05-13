import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useState } from "react";
import { toast } from "sonner";
import { Check, Loader2 } from "lucide-react";

const eventTypes = [
  "Batizado",
  "Primeira Comunhão",
  "Crisma",
  "Casamento",
  "Bodas",
  "Aniversário",
  "Evento Corporativo",
  "Presente Especial",
  "Outro",
];

// Substitua pelo seu número de WhatsApp (apenas números, com código do país)
const WHATSAPP_NUMBER = "5583998595225"; // Exemplo: 55 11 99999-9999

const Budget = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    quantity: "",
    personalization: "",
    deadline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    // Formatação automática do telefone
    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
      return;
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para formatar número de telefone
  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    const limited = numbers.slice(0, 11);
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (limited.length <= 10) {
      return limited
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
    
    // Com 11 dígitos (com 9 na frente)
    return limited
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const validateForm = () => {
    // Valida campos obrigatórios
    if (!formData.name.trim()) {
      toast.error("Por favor, insira seu nome completo.");
      return false;
    }
    
    if (!formData.email.trim()) {
      toast.error("Por favor, insira seu e-mail.");
      return false;
    }
    
    if (!formData.phone.trim()) {
      toast.error("Por favor, insira seu telefone.");
      return false;
    }
    
    // Valida formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return false;
    }
    
    // Valida telefone (pelo menos 10 dígitos)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      toast.error("Por favor, insira um telefone válido com DDD.");
      return false;
    }
    
    return true;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valida o formulário
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Criar mensagem formatada para WhatsApp
      const message = `📋 *SOLICITAÇÃO DE ORÇAMENTO - ZL CASA* 
      
*INFORMAÇÕES DO CLIENTE:*
👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}
📱 *Telefone:* ${formData.phone}

*DETALHES DO PEDIDO:*
${formData.eventType ? `🎉 *Tipo de Evento:* ${formData.eventType}` : '🎉 *Tipo de Evento:* Não especificado'}
${formData.quantity ? `📦 *Quantidade Desejada:* ${formData.quantity}` : '📦 *Quantidade:* Não especificada'}
${formData.personalization ? `✨ *Personalização:* ${formData.personalization}` : '✨ *Personalização:* Não solicitada'}
${formData.deadline ? `📅 *Data do Evento:* ${formatDate(formData.deadline)}` : '📅 *Data do Evento:* Não definida'}

*MENSAGEM ADICIONAL:* 
${formData.message || "Sem detalhes adicionais."}

---
🕐 *Enviado via site em:* ${new Date().toLocaleDateString("pt-BR")} às ${new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })}
💎 *ZL Casa - Porcelana Artesanal*`;

      // Confirmação antes de enviar
      const confirmed = window.confirm(
        "✉️ ENVIAR ORÇAMENTO VIA WHATSAPP\n\n" +
        "Ao clicar em OK, você será redirecionado ao WhatsApp com todos os dados preenchidos.\n\n" +
        "Deseja continuar?"
      );
      
      if (!confirmed) {
        setIsSubmitting(false);
        toast.info("Envio cancelado. Você pode revisar os dados.");
        return;
      }
      
      // Codificar mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Tentar abrir WhatsApp em nova aba
      const newWindow = window.open(whatsappURL, "_blank");
      
      if (newWindow) {
        toast.success("✓ WhatsApp aberto! Por favor, envie a mensagem para finalizar.");
        
        // Limpar formulário após 1 segundo
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            eventType: "",
            quantity: "",
            personalization: "",
            deadline: "",
            message: "",
          });
          setIsSubmitting(false);
        }, 1000);
      } else {
        // Se pop-up foi bloqueado, oferecer alternativa
        const copyInstead = window.confirm(
          "⚠️ POP-UP BLOQUEADO\n\n" +
          "O navegador bloqueou a abertura do WhatsApp.\n\n" +
          "Deseja copiar a mensagem para colar manualmente no WhatsApp?"
        );
        
        if (copyInstead) {
          // Copiar mensagem para área de transferência
          navigator.clipboard.writeText(message).then(() => {
            toast.success("✓ Mensagem copiada! Agora cole no WhatsApp do fornecedor.");
            
            // Oferecer link direto
            setTimeout(() => {
              const openDirectly = window.confirm(
                "Deseja abrir o WhatsApp agora?\n\n" +
                "OK: Abrir WhatsApp\n" +
                "Cancelar: Já copiei, obrigado!"
              );
              
              if (openDirectly) {
                window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`;
              }
            }, 1500);
          }).catch(() => {
            // Fallback para navegadores antigos
            const textArea = document.createElement('textarea');
            textArea.value = message;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            toast.success("✓ Mensagem copiada! Cole no WhatsApp.");
          });
        } else {
          toast.error("Envio não realizado. Permita pop-ups para esta ação.");
        }
        
        setIsSubmitting(false);
      }
      
    } catch (error) {
      console.error("Erro ao enviar orçamento:", error);
      toast.error("❌ Erro ao processar pedido. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Solicitar Orçamento | Peças sob Encomenda"
        description="Solicite um orçamento para peças de porcelana personalizadas para seu evento. Batizados, casamentos e presentes corporativos exclusivos."
        path="/orcamento"
      />
      {/* Hero Section */}
      <section className="py-24 bg-cream">
        <div className="container-elegant text-center">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold mb-4 block">
            Peças Sob Encomenda
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-petrol mb-6">
            Solicitar Orçamento
          </h1>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className="font-sans text-foreground/70 max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para
            criar a peça perfeita para seu evento.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-foreground/60">
            <span>Entraremos em contato via WhatsApp em até 24h</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="bg-cream p-8 space-y-6">
              <h2 className="font-serif text-2xl text-petrol mb-6">
                Informações de Contato
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-sm text-foreground/70 mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300"
                    placeholder="Seu nome completo"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm text-foreground/70 mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300"
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-sans text-sm text-foreground/70 mb-2"
                >
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={20}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300"
                  placeholder="(11) 99999-9999"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-cream p-8 space-y-6">
              <h2 className="font-serif text-2xl text-petrol mb-6">
                Detalhes do Pedido
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="eventType"
                    className="block font-sans text-sm text-foreground/70 mb-2"
                  >
                    Tipo de Evento
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    <option value="">Selecione...</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block font-sans text-sm text-foreground/70 mb-2"
                  >
                    Quantidade Desejada
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    maxLength={50}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300"
                    placeholder="Ex: 50 unidades"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="personalization"
                  className="block font-sans text-sm text-foreground/70 mb-2"
                >
                  Deseja Personalização?
                </label>
                <input
                  type="text"
                  id="personalization"
                  name="personalization"
                  value={formData.personalization}
                  onChange={handleChange}
                  maxLength={200}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300"
                  placeholder="Iniciais, frases, artes específicas..."
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="deadline"
                  className="block font-sans text-sm text-foreground/70 mb-2"
                >
                  Data do Evento (se houver)
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm text-foreground/70 mb-2"
                >
                  Mensagem Adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={1000}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none font-sans text-sm transition-colors duration-300 resize-none"
                  placeholder="Descreva sua ideia, referências ou qualquer detalhe importante..."
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 bg-petrol text-white px-12 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-petrol-light disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Orçamento</span>
                    <Check size={18} />
                  </>
                )}
              </button>
              
              <div className="mt-6 p-4 bg-cream/50 border border-gold/20">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 mt-0.5">
                    <Check size={16} />
                  </div>
                  <div className="text-left">
                    <p className="font-sans text-sm text-foreground/70">
                      <strong>Como funciona:</strong> Após clicar em "Enviar Orçamento", você será redirecionado ao WhatsApp com todos os dados preenchidos. Basta enviar a mensagem para nossa equipe.
                    </p>
                    <p className="font-sans text-xs text-foreground/50 mt-2">
                      * Campos com asterisco são obrigatórios. Responderemos em até 24 horas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Consulta Gratuita",
                text: "Orçamentos sem compromisso. Tire suas dúvidas conosco.",
              },
              {
                title: "Prazo de Produção",
                text: "Em média 30 a 45 dias, dependendo da complexidade.",
              },
              {
                title: "Entrega Segura",
                text: "Embalagem cuidadosa para garantir que suas peças cheguem perfeitas.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-6 border border-gold/20 text-center hover:border-gold/40 transition-colors duration-300"
              >
                <h3 className="font-serif text-lg text-petrol mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-foreground/60">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </Layout>
  );
};

export default Budget;