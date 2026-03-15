import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-3">🐾 PawsAdopt</h3>
            <p className="text-white opacity-90">
              Connecting loving homes with adorable pets. Find your perfect companion today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-yellow-300 transition">Browse Pets</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">How It Works</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="opacity-90 mb-2">📧 info@pawsadopt.com</p>
            <p className="opacity-90 mb-2">📱 +1 (555) 123-4567</p>
            <p className="opacity-90">📍 123 Pet Street, Animal City</p>
          </div>
        </div>

        <div className="border-t border-white border-opacity-30 pt-6">
          <p className="text-center opacity-90">
            © 2024 PawsAdopt. All rights reserved. Make a pet happy today! 🐕🐱🐦🦎
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
