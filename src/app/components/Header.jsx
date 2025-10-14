"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
        
          <div className={styles.upperPart}>
          <button
            className={styles.hamburgerButton}
            onClick={toggleMobileMenu}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Image src="/hamburger.svg" alt="Menu Icon" width={24} height={24} />
          </button>
              <div className={styles.companyName}>TANN TRIM</div>
              <div className={styles.iconGroup}>
                <Image
                  src="search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
                <Image
                  src="user.svg"
                  alt="User"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
                <Image
                  src="bookmark.svg"
                  alt="Bookmark"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
                <Image
                  src="bag.svg"
                  alt="Bag"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
            </div>
          </div>
          <div className={styles.upperPart}>
            <nav className={styles.desktopNav}>
              <Link href="#">Bags</Link>
              <Link href="#">Travel</Link>
              <Link href="#">Accesories</Link>
              <Link href="#">Gifting</Link>
              <Link href="#">Jewelery</Link>
            </nav>
          </div>
      
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Header;
