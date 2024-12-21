import React from 'react';
import { useParams } from 'react-router-dom';
import storeData from '../../utils/storeData';

const ProductList = () => {
  const { vendorId } = useParams();
  const vendor = storeData.vendors.find((v) => v.id === parseInt(vendorId, 10));

  if (!vendor) {
    return <h1 className="text-center text-2xl">Store Not Found</h1>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{vendor.name} - Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vendor.products.map((product) => (
          <div key={product.id} className="bg-white text-black rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
