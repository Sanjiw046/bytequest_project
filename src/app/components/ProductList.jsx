"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
import { mockProducts } from "@/app/data/mockData";

const API_URL = "https://fakestoreapi.com/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);

        if (!Array.isArray(response.data)) {
          throw new Error("Invalid API response format");
        }

        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Showing mock data instead.");
        setProducts(mockProducts); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className={styles.message}>Loading products...</p>;
  }

  return (
    <div className={styles.container}>
      {error && <p className={`${styles.message} ${styles.error}`}>{error}</p>}

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
