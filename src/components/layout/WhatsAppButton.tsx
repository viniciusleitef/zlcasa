import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5583998595225";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre as peças da zlcasa."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;
