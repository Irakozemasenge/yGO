import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { ygoData } from "../data";

const WHATSAPP_NUMBER = "25762370904";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const YgoContactSection: React.FC = () => {
  const contact = ygoData.contact;

  const phones = [
    { label: "Directeur Exécutif", numbers: [contact.phone, contact.phone2] },
    { label: "Directeur Technique", numbers: [contact.phoneDRC, contact.phoneDRC2] },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Parlons de votre{" "}
              <span className="text-yellow-400 italic">projet</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Contactez-nous directement. Nous vous répondons rapidement sur WhatsApp.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — contact info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Email */}
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <div className="w-11 h-11 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white hover:text-yellow-300 transition-colors font-medium"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phones */}
              {phones.map((group) => (
                <div key={group.label} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                  <div className="w-11 h-11 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Téléphone {group.label}
                    </p>
                    {group.numbers.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num.replace(/\s/g, "")}`}
                        className="block text-white hover:text-yellow-300 transition-colors font-medium"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Address */}
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <div className="w-11 h-11 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">Adresse</p>
                  <p className="text-white font-medium">{contact.address}</p>
                </div>
              </div>
            </motion.div>

            {/* Right — WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-10 text-center">
                {/* WhatsApp icon big */}
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Écrivez-nous sur WhatsApp
                </h3>
                <p className="text-gray-500 mb-2 text-sm">
                  La façon la plus rapide de nous joindre
                </p>
                <p className="text-blue-700 font-bold text-lg mb-8">
                  +257 62 37 09 04
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 mb-4"
                >
                  <WhatsAppIcon />
                  Démarrer la conversation
                </a>

                <p className="text-gray-400 text-xs">
                  Réponse généralement sous quelques minutes
                </p>

                {/* Quick message suggestions */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm mb-4 font-medium">Messages rapides :</p>
                  <div className="flex flex-col gap-2">
                    {[
                      "Je veux développer une application",
                      "J'ai besoin d'un site web",
                      "Parlez-moi de vos services IA",
                    ].map((msg) => (
                      <a
                        key={msg}
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-left text-sm bg-gray-50 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-300 text-gray-700 hover:text-blue-800 px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        {msg}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YgoContactSection;
