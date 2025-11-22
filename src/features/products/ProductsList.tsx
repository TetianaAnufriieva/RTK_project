import { useEffect } from "react";

import styles from "./ProductsList.module.css";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProducts, removeProduct} from "./productSlice";
import type { RootState } from "../../app/store";

import { addToCart } from "../cart/cartSlice";

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  if (!loading && items.length === 0) {
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
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageBlock}>
              <div className={styles.topRow}>
                <span className={styles.category}>{item.category}</span>

                <button
                  className={styles.deleteBtn}
                  onClick={() => dispatch(removeProduct(item.id))}
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
            Добавить в корзину
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};
