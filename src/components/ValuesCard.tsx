import React from "react";
import { Value } from "../data";

interface ValuesCardProps {
  value: Value;
}

const ValuesCard: React.FC<ValuesCardProps> = ({ value }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-200 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {value.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {value.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{value.description}</p>
    </div>
  );
};

export default ValuesCard;
