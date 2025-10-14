"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.menuContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          <Image src="/close.svg" alt="Close Icon" width={24} height={24} />
        </button>

        <nav className={styles.mobileNav}>
          <Link href="#" onClick={onClose}>
            All Products
          </Link>
          <Link href="#" onClick={onClose}>
            Categories
          </Link>
          <Link href="#" onClick={onClose}>
            About
          </Link>
          <Link href="#" onClick={onClose}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
