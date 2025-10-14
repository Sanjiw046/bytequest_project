"use client";
import Image from "next/image";
import styles from "./CategoryBar.module.css";

const categories = [
    // ... categories array (keeping icon URLs as provided) ...
    { name: "All Bags", icon: "all-bags.svg" },
    { name: "Vanity Pouch", icon: "vanity-pouch.svg" },
    { name: "Tote Bag", icon: "tote-bag.svg" },
    { name: "Duffle Bag", icon: "duffle-bag.svg" },
    { name: "Laptop Sleeve", icon: "laptop-sleeve.svg" },
    { name: "Messenger Bags", icon: "messenger-bag.svg" },
    { name: "Slings Bgs", icon: "slings-bag.svg" },
    { name: "Handbags", icon: "handbags.svg" },
    { name: "Duffle ", icon: "duffle-bag.svg" },
    { name: "Laptop Sleev", icon: "laptop-sleeve.svg" },
    { name: "Messenger Bag", icon: "messenger-bag.svg" },
    { name: "Slings Bg", icon: "slings-bag.svg" },
    { name: "Handbag", icon: "handbags.svg" },
];

export default function CategoryBar() {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((cat) => (
        <div key={cat.name} className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            {/* The white background will now be on the iconWrapper itself */}
            <Image
              src={cat.icon}
              alt={cat.name}
              width={70}
              height={70}
              className={styles.icon}
            />
          </div>
          <p className={styles.label}>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}