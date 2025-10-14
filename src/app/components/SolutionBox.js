import React from 'react';
import Image from 'next/image';

const SolutionBox = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-8 group">
      {/* Icon with hover animation */}
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
        <Image src={icon} alt={title} width={65} height={65} />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-base lg:text-xl font-semibold text-gray-800 mb-1 lg:mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SolutionBox;
