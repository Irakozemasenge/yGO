import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ygoData } from "../data";
import ygoHeaderLogo from "../assets/yGOHadaerLogo.png";

const WHATSAPP_NUMBER = "25762370904";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const contact = ygoData.contact;

  const navLinks = ygoData.navigation.links;

  return (
    <footer className="bg-blue-900 text-white">
      {/* Top band */}
      <div className="bg-blue-800 border-b border-blue-700 py-3 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200 text-sm">
            Innover, Connecter, Transformer l'Afrique.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-5 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <img
                src={ygoHeaderLogo}
                alt="yGO Digital"
                className="h-12 w-auto object-contain mb-4 animate-float"
              />
              <p className="text-blue-200 leading-relaxed text-sm mb-4">
                {ygoData.slogan}
              </p>
              <p className="text-blue-300 text-xs">
                © {currentYear} yGO Digital. Tous droits réservés.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-bold text-yellow-400 text-lg mb-5">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-yellow-400 text-lg mb-5">Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${contact.email}`} className="text-blue-200 hover:text-yellow-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div className="text-blue-200 space-y-1">
                    <p className="text-yellow-400 text-xs font-semibold uppercase">Directeur Exécutif</p>
                    <a href={`tel:${contact.phone}`} className="block hover:text-yellow-400 transition-colors">{contact.phone}</a>
                    <a href={`tel:${contact.phone2}`} className="block hover:text-yellow-400 transition-colors">{contact.phone2}</a>
                    <p className="text-yellow-400 text-xs font-semibold uppercase mt-2">Directeur Technique</p>
                    <a href={`tel:${contact.phoneDRC}`} className="block hover:text-yellow-400 transition-colors">{contact.phoneDRC}</a>
                    <a href={`tel:${contact.phoneDRC2}`} className="block hover:text-yellow-400 transition-colors">{contact.phoneDRC2}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-200">{contact.address}</span>
                </div>
                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 mt-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <motion.div
            className="pt-8 border-t border-blue-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm">
              Innovation, Intelligence et Impact Digital · Musenyi, Commune Mpanda
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
