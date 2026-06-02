import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { ygoData } from "../data";
import ValuesCard from "./ValuesCard";

const YgoValuesSection: React.FC = () => {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Nos valeurs fondamentales
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce qui nous <span className="text-blue-700 italic">anime</span> chaque
              jour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos valeurs sont le fondement de notre engagement envers
              l'excellence et l'impact positif
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ygoData.values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValuesCard value={value} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YgoValuesSection;
