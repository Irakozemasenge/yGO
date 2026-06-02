import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Zap, Clock } from "lucide-react";
import { ygoData } from "../data";
import ebilletLogo from "../assets/ebillet.png";
import saniaLogo from "../assets/sania logo.png";

const platformAssets: Record<string, string> = {
  "eBillet.bi": ebilletLogo,
  "Sania.bi": saniaLogo,
};

const WHATSAPP = "https://wa.me/25762370904";

const YgoPlatformsSection: React.FC = () => {
  const regularPlatforms = ygoData.platforms.filter((p) => p.name !== "kashflow.africa");
  const kashflow = ygoData.platforms.find((p) => p.name === "kashflow.africa");

  return (
    <section id="platforms" className="py-20 bg-blue-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Nos Plateformes Numériques
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Des solutions <span className="text-yellow-400 italic">concrètes</span> pour l'Afrique
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
              yGO Digital développe et opère des plateformes qui répondent aux défis réels du continent africain.
            </p>
          </motion.div>

          {/* Grille des 3 premières plateformes */}
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {regularPlatforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-800 border border-blue-700 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300 group"
              >
                {/* En-tête couleur */}
                <div className={`bg-gradient-to-r ${platform.color} p-5`}>
                  <div className="flex items-center gap-3">
                    {platformAssets[platform.name] ? (
                      <img
                        src={platformAssets[platform.name]}
                        alt={platform.name}
                        className="w-12 h-12 object-contain rounded-xl bg-white/20 p-1 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        {platform.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-white text-lg leading-tight">{platform.name}</h3>
                      <p className="text-white/80 text-xs mt-0.5 leading-snug">{platform.description}</p>
                    </div>
                  </div>
                </div>

                {/* Corps */}
                <div className="p-5 bg-blue-800">
                  {/* eBillet — grille de types de billets */}
                  {(platform as any).highlights && platform.name === "eBillet.bi" && (
                    <div>
                      <p className="text-blue-300 text-xs font-medium mb-3">Types de billets disponibles</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {(platform as any).highlights.map((h: any, i: number) => (
                          <div key={i} className="flex items-center gap-2 bg-blue-900 border border-blue-700 rounded-lg px-3 py-2 hover:border-yellow-400 transition-colors duration-200">
                            <span className="text-base flex-shrink-0">{h.icon}</span>
                            <span className="text-white text-xs font-medium truncate">{h.label}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors duration-200 mt-4"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visiter eBillet.bi
                      </a>
                    </div>
                  )}

                  {/* Sania — 3 features avec détail */}
                  {(platform as any).highlights && platform.name === "Sania.bi" && (
                    <div className="space-y-3">
                      {(platform as any).highlights.map((h: any, i: number) => (
                        <div key={i} className="bg-blue-900 border border-blue-700 rounded-xl p-4 hover:border-yellow-400 transition-colors duration-200">
                          <div className="flex items-start gap-3">
                            <span className="text-xl flex-shrink-0 mt-0.5">{h.icon}</span>
                            <div>
                              <p className="text-white font-semibold text-sm mb-1">{h.label}</p>
                              <p className="text-blue-300 text-xs leading-relaxed">{h.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors duration-200 mt-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visiter Sania.bi
                      </a>
                    </div>
                  )}

                  {/* Plateformes sans highlights — lien simple ou apps */}
                  {!(platform as any).highlights && platform.apps.length === 0 && (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visiter la plateforme
                    </a>
                  )}

                  {/* AfyaClick — apps Google Play */}
                  {!(platform as any).highlights && platform.apps.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-blue-300 text-xs mb-3 font-medium">
                        {platform.apps.length} applications sur Google Play
                      </p>
                      {platform.apps.map((app, i) => (
                        <div key={i} className="bg-blue-900 border border-blue-700 rounded-xl p-3 hover:border-yellow-400 transition-all duration-200">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-semibold text-xs mb-0.5">{app.name}</p>
                              <p className="text-blue-300 text-xs leading-snug">{app.description}</p>
                            </div>
                            {app.url && app.url !== "#" ? (
                              <a
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-300 text-blue-900 text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors duration-200"
                              >
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zM.54 1.96C.2 2.4 0 3.02 0 3.8v16.4c0 .78.2 1.4.54 1.84l.1.1 9.2-9.2v-.22L.64 3.52l-.1.1-.1.1zM20.3 10.37l-2.62-1.5-3.5 3.5 3.5 3.5 2.64-1.5c.75-.43.75-1.13 0-1.56l-.02-.44zM4.17.24L16.77 12.84 13.59 16 .99.44C1.34.1 1.87-.07 2.4.04c.6.1 1.2.4 1.77.2z"/>
                                </svg>
                                Play
                              </a>
                            ) : (
                              <span className="flex-shrink-0 bg-blue-700 text-blue-300 text-xs px-2.5 py-1.5 rounded-lg">
                                Bientôt
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Carte KashFlow étendue ── */}
          {kashflow && (kashflow as any).details && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-blue-800 border border-blue-700 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300"
            >
              {/* En-tête KashFlow */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-7 border-b border-blue-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                      💰
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        kashflow<span className="text-yellow-400">.africa</span>
                      </h3>
                      <p className="text-blue-200 text-sm mt-1">
                        {(kashflow as any).details.tagline}
                      </p>
                    </div>
                  </div>
                  <a
                    href={kashflow.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 flex-shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visiter kashflow.africa
                  </a>
                </div>

                {/* Description */}
                <p className="text-blue-200 text-sm mt-5 leading-relaxed max-w-3xl">
                  {(kashflow as any).details.about}
                </p>
              </div>

              <div className="p-7">
                {/* Devises supportées */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-yellow-400 rounded-full inline-block" />
                    Devises supportées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(kashflow as any).details.currencies.map((c: any) => (
                      <span
                        key={c.code}
                        className="inline-flex items-center gap-1.5 bg-blue-900 border border-blue-600 text-blue-100 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        <span>{c.flag}</span>
                        <span className="font-bold text-white">{c.code}</span>
                        <span className="text-blue-300 hidden sm:inline">{c.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fonctionnalités */}
                <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-yellow-400 rounded-full inline-block" />
                  Ce que propose KashFlow
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(kashflow as any).details.features.map((feat: any, i: number) => (
                    <div
                      key={i}
                      className={`relative bg-blue-900 border rounded-xl p-4 transition-all duration-200 ${
                        feat.comingSoon
                          ? "border-blue-600 opacity-80"
                          : "border-blue-700 hover:border-yellow-400"
                      }`}
                    >
                      {feat.comingSoon && (
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-blue-700 text-blue-300 text-xs px-2 py-0.5 rounded-full">
                          <Clock className="w-2.5 h-2.5" />
                          Bientôt
                        </span>
                      )}
                      <div className="text-2xl mb-2">{feat.icon}</div>
                      <h5 className="text-white font-semibold text-sm mb-1">{feat.title}</h5>
                      <p className="text-blue-300 text-xs leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>

                {/* CTA collaboration */}
                <div className="mt-8 bg-blue-900 border border-blue-600 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">Vous avez une boutique e-commerce ?</p>
                      <p className="text-blue-300 text-xs mt-0.5">
                        Intégrez KashFlow comme gateway de paiement et offrez à vos clients un règlement simple, mobile et instantané.
                      </p>
                    </div>
                  </div>
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent("Bonjour, je veux intégrer KashFlow comme gateway de paiement sur mon site e-commerce.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Nous contacter
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          <motion.p
            className="text-center text-blue-400 text-sm mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Toutes nos plateformes sont conçues et développées par yGO Digital, à Musenyi, Commune Mpanda.
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default YgoPlatformsSection;
