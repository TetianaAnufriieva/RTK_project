import { useEffect } from "react";

import styles from "./ProductsList.module.css";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProducts, removeProduct } from "./productSlice";
import type { RootState } from "../../app/store";
import { ClipLoader } from "react-spinners";

import { addToCart } from "../cart/cartSlice";

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
  return (
    <div className={styles.loadingWrapper}>
      <ClipLoader color="#4facfe" size={50} />
    </div>
  );
  if (error) return <p className={styles.error}>{error}</p>;

  if (!loading && items.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Products Store</h1>
        <h2>No items</h2>
        <button onClick={() => dispatch(fetchProducts())}>
          Load again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Products Store</h1>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageBlock}>
              <div className={styles.topRow}>
                <span className={styles.category}>{item.category}</span>

                <button  title="Delete"
                  className={styles.deleteBtn}
                  onClick={() => {
                    if (confirm("Do you really want to delete the product?")) {
                      dispatch(removeProduct(item.id));
                    }
                  }}
                >
                  ❌
                </button>
              </div>

              <img src={item.image} alt={item.title} />
            </div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.field}>
              <span>Price:</span> {item.price}
            </p>

            <div className={styles.rating}>
              <span>Rating:</span>
              <p>
                {item.rating.rate}, {item.rating.count}
              </p>
            </div>
            <button
              className={styles.addBtn}
              onClick={() => dispatch(addToCart(item))}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
