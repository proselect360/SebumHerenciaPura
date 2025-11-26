import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573001112233"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl z-50 hover:scale-110 transition-transform"
      target="_blank"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
