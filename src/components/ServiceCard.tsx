import React, { useState } from "react";
import { Service } from "../data";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
        >
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4">
        {service.description}
      </p>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-3">
            Caractéristiques principales :
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
