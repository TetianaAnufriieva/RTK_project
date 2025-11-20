import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductsList.module.css";
import type { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import {
  fetchProducts,
  removeProduct,
  selectError,
  selectLoading,
  selectProducts,
} from "./productSlice";

export const ProductsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Загрузка...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  if (!loading && products.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Products Store</h1>
        <h2>Нет товаров</h2>
        <button onClick={() => dispatch(fetchProducts())}>
          Загрузить снова
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Products Store</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageBlock}>
              <div className={styles.topRow}>
                <span className={styles.category}>{product.category}</span>

                <button
                  className={styles.deleteBtn}
                  onClick={() => dispatch(removeProduct(product.id))}
                >
                  ❌
                </button>
              </div>

              <img src={product.image} alt={product.title} />
            </div>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.field}>
              <span>Price:</span> {product.price}
            </p>

            <div className={styles.rating}>
              <span>Rating:</span>
              <p>
                {product.rating.rate}, {product.rating.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
