import React from "react";
import { motion } from "framer-motion";
import { ygoData } from "../data";
import { CheckCircle, Phone, MapPin, MessageCircle } from "lucide-react";
import travelLogo from "../assets/yGO Travel Agency.png";

const WHATSAPP = "https://wa.me/25762370904";

const YgoTravelSection: React.FC = () => {
  const { travelAgency } = ygoData;

  return (
    <section id="travel" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Badge yGO S.A */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
              yGO S.A — Branche Voyage
            </span>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              yGO S.A regroupe deux branches complémentaires : <strong className="text-blue-700">yGO Digital</strong> pour la transformation numérique et <strong className="text-blue-700">yGO Travel Agency</strong> pour vos besoins de voyage et d'imprimerie.
            </p>
          </motion.div>

          {/* Carte principale */}
          <motion.div
            className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* En-tête avec logo */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-950 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <img
                  src={travelLogo}
                  alt="yGO Travel Agency"
                  className="h-20 w-auto object-contain flex-shrink-0"
                />
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                    yGO <span className="text-yellow-400">Travel</span> Agency
                  </h2>
                  <p className="text-blue-200 leading-relaxed max-w-2xl">
                    {travelAgency.tagline}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="grid lg:grid-cols-2 gap-10">

                {/* Colonne gauche — Services Travel */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                    <span className="w-1 h-5 bg-yellow-400 rounded-full" />
                    Nos services de voyage
                  </h3>
                  <ul className="space-y-3">
                    {travelAgency.services.map((s, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 bg-blue-800 border border-blue-700 rounded-xl p-4 hover:border-yellow-400 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-2xl flex-shrink-0">{s.icon}</span>
                        <span className="text-white text-sm font-medium leading-snug">{s.title}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Colonne droite — Imprimerie + Contact */}
                <div className="space-y-6">
                  {/* Imprimerie */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-yellow-400 rounded-full" />
                      {travelAgency.imprimerie.title}
                    </h3>
                    <p className="text-blue-300 text-sm mb-4">
                      {travelAgency.imprimerie.description}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {travelAgency.imprimerie.services.map((s, i) => (
                        <div
                          key={i}
                          className="bg-blue-800 border border-blue-700 rounded-xl p-3 text-center hover:border-yellow-400 transition-colors duration-200"
                        >
                          <div className="text-xl mb-1">{s.icon}</div>
                          <p className="text-white text-xs font-medium leading-tight">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="bg-blue-800 border border-blue-700 rounded-2xl p-5">
                    <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-4">
                      Contactez yGO Travel
                    </h4>
                    <div className="space-y-2 mb-4">
                      {travelAgency.contact.phones.map((phone, i) => (
                        <a
                          key={i}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors text-sm"
                        >
                          <Phone className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                          {phone}
                        </a>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 text-blue-300 text-sm mb-5">
                      <MapPin className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>{travelAgency.contact.address}</span>
                    </div>
                    <a
                      href={`${WHATSAPP}?text=${encodeURIComponent("Bonjour, je voudrais des informations sur les services de yGO Travel Agency.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 w-full justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contacter yGO Travel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default YgoTravelSection;
