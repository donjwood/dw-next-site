'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";

import styles from "./NavBar.module.css";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles['navbar-outer']}>
      <div className={styles['navbar-inner']} >
          {/* Logo */}
          <div className={styles['nav-header']}>
            <a href="/" className={styles['nav-title']}>
              DJW
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600">
              About
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}