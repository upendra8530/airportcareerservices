import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => {
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent("Hi, I'm interested in airport career guidance. Please share more details.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-success p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-success-foreground" />
    </a>
  );
};

export default WhatsAppFAB;
