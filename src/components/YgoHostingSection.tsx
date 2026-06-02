import React from "react";
import { motion } from "framer-motion";
import { ygoData } from "../data";
import { CheckCircle, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "25762370904";

const YgoHostingSection: React.FC = () => {
  const { hosting } = ygoData;

  return (
    <section id="hosting" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* En-tête */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              🌐 Infrastructure Digitale
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {hosting.title}
            </h2>
            <p className="text-lg text-yellow-600 font-semibold mb-4">
              {hosting.subtitle}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {hosting.description}
            </p>
          </motion.div>

          {/* Grille des 4 services */}
          <div className="grid md:grid-cols-2 gap-7 mb-14">
            {hosting.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icône + titre */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bannière CTA */}
          <motion.div
            className="bg-blue-900 rounded-2xl p-10 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Besoin d'un domaine, d'un SSL ou d'un hébergement ?
              </h3>
              <p className="text-blue-200 mb-8 max-w-xl mx-auto">
                Contactez-nous sur WhatsApp. Nous vous conseillons et vous proposons la solution adaptée à votre projet et à votre budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite enregistrer un nom de domaine.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 px-7 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enregistrer un domaine
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je cherche un hébergement pour mon site web.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Héberger mon site
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default YgoHostingSection;
