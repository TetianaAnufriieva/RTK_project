import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SandwichState {
  value: string;
}

const initialState: SandwichState = {
  value: "",
};

// аналог Reducer
export const SandwichSlice = createSlice({
  name: "sandwich", // → name — имя кусочка/срез состояния. Redux Toolkit сам создаёт типы action на основе этого имени.
  initialState, // → Подключаем начальное состояние.
  reducers: {
    //→ Раздел, где мы описываем функции, которые изменяют состояние.// Каждый reducer автоматически создаёт action.
    addIngredient(state, action: PayloadAction<string>) {
      state.value += action.payload;
    },
    clear(state) {
      state.value = "";
    },
  },
});

export const { addIngredient, clear } = SandwichSlice.actions;
// → Отсюда приходят готовые action creators, которые можно сразу диспатчить.
export default SandwichSlice.reducer;

// → Экспортируем reducer, чтобы подключить его в store.
