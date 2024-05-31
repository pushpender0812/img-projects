import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-50 text-white py-4 px-4 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center sm:text-left">
          <p className="text-sm">© 2024 Pushpender Yadav. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <NavLink to="/" className="hover:underline text-orange-400">Home</NavLink>
          <NavLink to="/men" className="hover:underline text-orange-400">Men's Wear</NavLink>
          <NavLink to="/women" className="hover:underline text-orange-400">Women's Wear</NavLink>
          <NavLink to="/electronics" className="hover:underline text-orange-400">Electronics</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
