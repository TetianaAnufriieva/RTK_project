import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addIngredient, clear } from "./sandwichSlice";

export const Sandwich = () => {
  const value = useAppSelector((state) => state.sandwich.value);
  // → Получаем текущий счётчик из Redux.

  const dispatch = useAppDispatch();
  // → Берём типизированный dispatch.

  return (
    <div style={{ background: 'lightblue', textAlign: "center", margin: "40px", border:'2px solid gray', borderRadius: '10px', overflowY:'auto',boxSizing:'border-box'}}>
      <h1>Sandwich: {value}</h1>
      <img
  
        style={{width: '100%', maxWidth:'300px', height:'auto',borderRadius:'10px',objectFit:'cover'}}
        src="https://www.menslife.com/upload/iblock/fd8/buterbrod_kak_sdelat_ego_poleznym.jpg"
        alt="sandwich"
      />
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", margin:'40px' }}>
        <button onClick={() => dispatch(addIngredient("🍞"))}>Add bread</button>
        <button onClick={() => dispatch(addIngredient("🧀"))}>
          Add cheese
        </button>
        <button onClick={() => dispatch(addIngredient("🥓"))}>Add bacon</button>
        <button onClick={() => dispatch(addIngredient("🥬"))}>Add salad</button>
        <button onClick={() => dispatch(clear())}>Clear</button>
      </div>
    </div>
  );
};
