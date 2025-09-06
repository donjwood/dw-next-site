"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import styles from "./Header.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles["navbar-outer"]}>
      <div className={clsx(styles["navbar-inner"], "container")}>
        <div className={styles["nav-header"]}>
          <a href="/" className={styles["nav-title"]}>
            DJW
          </a>
        </div>
        <div className={styles["nav-desktop-links"]}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
