import React from 'react';

const StoreCard = ({ logoUrl, name, category }) => {
  return (
    <div className="border rounded p-6 text-center hover:shadow-md transition-shadow">
      <img 
        src={logoUrl} 
        alt={`${name} logo`} 
        className="mx-auto mb-4 w-20 h-20 object-cover rounded-full"
      />
      <h3 className="font-medium text-lg text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{category}</p>
    </div>
  );
};

export default StoreCard;
