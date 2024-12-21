import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Levithan Urban</div>
      <input
        type="text"
        placeholder="Search stores..."
        className="px-4 py-2 rounded-md w-1/3"
      />
      <div>
        <button className="px-4 py-2 bg-white text-blue-600 rounded-md mr-2">
          Login
        </button>
        <button className="px-4 py-2 bg-white text-blue-600 rounded-md">
          Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
