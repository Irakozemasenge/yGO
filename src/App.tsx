import React from 'react';
import { ScrollProgress } from "./components/ScrollComponents";
import { Header } from "./components/Header";
import YgoHeroSection from "./components/YgoHeroSection";
import YgoValuesSection from "./components/YgoValuesSection";
import YgoServicesSection from "./components/YgoServicesSection";
import YgoHostingSection from "./components/YgoHostingSection";
import YgoPlatformsSection from "./components/YgoPlatformsSection";
import YgoContactSection from "./components/YgoContactSection";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/ScrollComponents";
import MissionVision from "./components/MissionVision";
import { ygoData } from "./data";
import { motion } from "framer-motion";
import DigitalTechNightSection from "./components/DigitalTechNightSection";
import YgoTravelSection from "./components/YgoTravelSection";

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative">
      <ScrollProgress />
      <div className="relative z-10">
        <Header />

        {/* 1. Hero */}
        <YgoHeroSection />

        {/* 2. Services */}
        <YgoServicesSection />

        {/* 3. Hébergement / Domaines / SSL */}
        <YgoHostingSection />

        {/* 4. Plateformes numériques */}
        <YgoPlatformsSection />

        {/* 5. Digital Tech Night */}
        <DigitalTechNightSection />

        {/* 6. yGO Travel Agency */}
        <YgoTravelSection />

        {/* 7. Mission & Vision */}
        <section id="mission" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-5">
                  Notre ADN
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                  Notre <span className="text-blue-700 italic">raison d'être</span>
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  Découvrez la mission et la vision qui guident chacune de nos décisions et de nos créations.
                </p>
              </motion.div>
              <MissionVision
                mission={ygoData.mission}
                vision={ygoData.vision}
              />
            </div>
          </div>
        </section>

        {/* 7. Valeurs */}
        <YgoValuesSection />

        {/* 8. Contact */}
        <YgoContactSection />

        <Footer />
      </div>
      <FloatingActionButton />
    </main>
  );
}

export default App;
