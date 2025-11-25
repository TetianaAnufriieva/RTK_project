import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addIngredient, clear } from "./sandwichSlice";
import style from "./Sandwich.module.css";

export const Sandwich = () => {
  const value = useAppSelector((state) => state.sandwich.value);
  const dispatch = useAppDispatch();

  return (
    <div className={style.sandwichContainer}>
      <h1>Sandwich: {value}</h1>
      <img
        className={style.sandwichImage}
        src="https://www.menslife.com/upload/iblock/fd8/buterbrod_kak_sdelat_ego_poleznym.jpg"
        alt="sandwich"
      />
      <div className={style.buttonGroup}>
        <button onClick={() => dispatch(addIngredient("🍞"))}>Add bread</button>
        <button onClick={() => dispatch(addIngredient("🧀"))}>Add cheese</button>
        <button onClick={() => dispatch(addIngredient("🥓"))}>Add bacon</button>
        <button onClick={() => dispatch(addIngredient("🥬"))}>Add salad</button>
        <button onClick={() => dispatch(clear())}>Clear</button>
      </div>
    </div>
  );
};