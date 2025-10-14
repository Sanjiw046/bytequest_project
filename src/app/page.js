import CategoryBar from "./components/CategoryBar";
import ProductList from "./components/ProductList";
import styles from "./components/ProductList.module.css";

export default function HomePage() {
  return (
    <main className={styles.pageContainer}>
      <CategoryBar/>
      <h1 className={styles.pageTitle}>Bags . BagPacks</h1>
      <ProductList />
    </main>
  );
}
