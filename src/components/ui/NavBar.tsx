"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles["navbar-outer"]}>
      <div className={styles["navbar-inner"]}>
        <div className={styles["nav-header"]}>
          <a href="/" className={styles["nav-title"]}>
            DJW
          </a>
        </div>
        <div className={styles["nav-desktop-links"]}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles["mobile-menu-button-wrapper"]}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles["mobile-menu-button"]}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={styles["mobile-dropdown"]}>
          <div className={styles["mobile-dropdown-inner"]}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
