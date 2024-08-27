import React from 'react';
import styles from './Footer.module.css';
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-white text-gray-900 py-10`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex justify-center md:justify-start">
          {/* Column 1: Logo */}
          <img src="/OT-logo-v1-horizontal-black.png" alt="Logo" className="h-12" />
        </div>
        <div className="flex flex-col items-center md:items-start">
          {/* Column 2: Company */}
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <Button variant="ghost" className="text-gray-600 p-0">Product</Button>
          <Button variant="ghost" className="text-gray-600 p-0">About</Button>
        </div>
        <div className="flex flex-col items-center md:items-start">
          {/* Column 3: Legal */}
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <Button variant="ghost" className="text-gray-600 p-0">Terms & Conditions</Button>
          <Button variant="ghost" className="text-gray-600 p-0">Privacy Policy</Button>
        </div>
        <div className="flex flex-col items-center md:items-start">
          {/* Column 4: Social */}
          <h2 className="text-lg font-semibold mb-4">Social</h2>
          <Button variant="ghost" className="text-gray-600 p-0">LinkedIn</Button>
          <Button variant="ghost" className="text-gray-600 p-0">Facebook</Button>
          <Button variant="ghost" className="text-gray-600 p-0">Instagram</Button>
          <Button variant="ghost" className="text-gray-600 p-0">X</Button>
        </div>
        <div className="flex flex-col items-center md:items-start">
          {/* Column 5: Contact */}
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-sm">email@email.com</p>
          <p className="text-sm">Tel: +91 123456789</p>
          <p className="text-sm">#36, KR Nanjappa Layout <br /> Koramangala 8th Block.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
