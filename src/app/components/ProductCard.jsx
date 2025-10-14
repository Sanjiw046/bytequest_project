"use client";

import Image from "next/image";
import styles from "./ProductCard.module.css";

// ✅ SVG icons as inline React components
const BookmarkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

const CartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const ProductCard = ({ product }) => {
  const { title, price, image } = product;

  // Simulated data for a richer UI
  const originalPrice = (price * 1.25).toFixed(2);
  const discount = "20% OFF";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.productImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />

        <button className={styles.iconButton} aria-label="Bookmark item">
          <BookmarkIcon />
        </button>
      </div>

      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.priceContainer}>
          <p className={styles.currentPrice}>${price.toFixed(2)}</p>
          <p className={styles.originalPrice}>${originalPrice}</p>
          <p className={styles.discount}>({discount})</p>
        </div>

        <button className={styles.cartButton} aria-label="Add to cart">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
