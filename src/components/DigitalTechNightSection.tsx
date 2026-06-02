import React from 'react';
import { motion } from 'framer-motion';
import { ygoData } from '../data';
import { Users, Globe, Target, Clock, AlertTriangle, Handshake } from 'lucide-react';
import dtnEventImg from '../assets/DTNEvent.png';

const WHATSAPP_URL = "https://wa.me/25762370904";

const WaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const DigitalTechNightSection: React.FC = () => {
  const { digitalTechNight } = ygoData;

  return (
    <section id="digital-tech-night" className="overflow-hidden">

      {/* HERO BANNER */}
      <div className="bg-blue-900 py-16 px-6 relative overflow-hidden">
        {/* Décoration fond */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full -ml-16 -mb-16 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              Organisateur d'Événements Digitaux
            </span>

            {/* Logo petit + titre côte à côte */}
            <div className="flex items-center gap-5 mb-6">
              <img
                src={dtnEventImg}
                alt="DTN Event logo"
                className="w-16 h-16 object-contain rounded-2xl flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Créateur du</p>
                <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  Digital Tech{" "}
                  <span className="text-yellow-400 italic font-light">Night</span>{" "}
                  <span className="text-white">Event</span>
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-blue-200 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              {digitalTechNight.description}
            </p>

            {/* Stats rapides */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { value: "Formation", label: "Technique" },
                { value: "Networking", label: "Professionnel" },
                { value: "Innovation", label: "Locale" },
              ].map((s) => (
                <div key={s.value} className="text-center">
                  <div className="text-yellow-400 font-bold text-lg">{s.value}</div>
                  <div className="text-blue-300 text-xs uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <a
                href="https://chat.whatsapp.com/IDIJjmum43vBG8mj3akWff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <WaIcon />
                Rejoindre le groupe WhatsApp
              </a>
          </motion.div>
        </div>
      </div>

      {/* CONTENU */}
      <div className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">

          {/* ── Présentation ── */}
          <motion.div
            className="mb-16 bg-blue-50 border-l-4 border-blue-700 p-8 rounded-r-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              {digitalTechNight.presentation.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {digitalTechNight.presentation.content}
            </p>
          </motion.div>

          {/* ── Vision & Mission ── */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{digitalTechNight.vision.title}</h3>
              </div>
              <p className="text-gray-700 mb-5 text-sm leading-relaxed">{digitalTechNight.vision.content}</p>
              <ul className="space-y-2">
                {digitalTechNight.vision.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-blue-50 border border-blue-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{digitalTechNight.mission.title}</h3>
              </div>
              <ul className="space-y-3">
                {digitalTechNight.mission.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Valeurs ── */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Nos <span className="text-yellow-500">Valeurs</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {digitalTechNight.values.map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-200 p-5 rounded-xl hover:border-yellow-400 hover:shadow-md transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{value.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Ce que nous offrons ── */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Ce que nous <span className="text-blue-700">offrons</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Object.entries(digitalTechNight.offerings).map(([key, offering], i) => (
                <motion.div
                  key={key}
                  className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-blue-800 mb-3 pb-2 border-b-2 border-yellow-300 text-sm">
                    {offering.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {offering.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs">
                        <span className="text-yellow-500 font-bold mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Format des sessions ── */}
          <div className="mb-16 bg-blue-900 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-800 rounded-full opacity-40 -mr-12 -mt-12 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Clock className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">{digitalTechNight.sessionFormat.title}</h3>
                <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                  {digitalTechNight.sessionFormat.duration}
                </span>
              </div>
              <div className="space-y-4">
                {digitalTechNight.sessionFormat.schedule.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-16 text-right font-bold text-yellow-400 text-sm flex-shrink-0">
                      {item.time}
                    </div>
                    <div className="w-px h-8 bg-blue-700 group-hover:bg-yellow-400 transition-colors flex-shrink-0" />
                    <div className="text-blue-100 text-sm group-hover:text-white transition-colors">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Défis & Sponsors ── */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="bg-red-50 border border-red-200 p-7 rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">{digitalTechNight.challenges.title}</h3>
              </div>
              <ul className="space-y-2 mb-5">
                {digitalTechNight.challenges.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-gray-800 italic border-l-4 border-red-400 pl-3">
                "{digitalTechNight.challenges.conclusion}"
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-gray-200 shadow-sm p-7 rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Handshake className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">{digitalTechNight.sponsors.title}</h3>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">{digitalTechNight.sponsors.description}</p>
              <p className="font-semibold text-gray-900 text-sm mb-3">Avantages sponsors :</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {digitalTechNight.sponsors.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Community CTA ── */}
          <motion.div
            className="bg-blue-900 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full -mr-20 -mt-20 blur-3xl" />
            </div>
            <div className="relative z-10">
              <Users className="w-10 h-10 text-yellow-400 mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {digitalTechNight.community.title}
              </h2>
              <p className="text-blue-200 mb-7 max-w-xl mx-auto text-sm leading-relaxed">
                {digitalTechNight.community.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {digitalTechNight.community.members.map((member, i) => (
                  <span key={i} className="bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    {member}
                  </span>
                ))}
              </div>

              <blockquote className="text-blue-200 italic text-sm mb-8 max-w-lg mx-auto">
                "{digitalTechNight.community.quote}"
              </blockquote>

              <a
                href="https://chat.whatsapp.com/IDIJjmum43vBG8mj3akWff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <WaIcon />
                Rejoignez-nous maintenant
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DigitalTechNightSection;
