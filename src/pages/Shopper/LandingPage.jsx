import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import storeData from '../../utils/storeData';

const LandingPage = () => {
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate the Hero Section
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Animate the Store Grid Section
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    // Animate each card individually
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 * index, ease: 'power2.out' }
      );
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 text-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1920x1080?text=Urban+Background")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        <h1
          ref={headingRef}
          className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Welcome to Levithan Urban
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-gray-300 mb-8">
          Discover curated stores, unique collections, and urban elegance.
        </p>
        <button className="relative z-10 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500">
          Explore the Collection
        </button>
      </section>

      {/* Store Grid Section */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Stores</h2>
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {storeData.vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform"
            >
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{vendor.name}</h3>
                <p className="text-gray-400">{vendor.category}</p>
              </div>
              <Link
                to={`/vendors/${vendor.id}`}
                className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Explore {vendor.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
