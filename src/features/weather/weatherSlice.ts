import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface Weather {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

interface WeatherState {
  data: Weather | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk<Weather, string>(
  "weather/fetchWeather",
  async (city) => {
    const apiKey = "78571ff31c53d069c327582321ce8c71";
    // units=metric — температура в Цельсиях
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    return await res.json();
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null; // сброс ошибки при новом запросе
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Loading error";
      });
  },
});
export const selectWeather = (state: RootState) => state.weather.data;
export const selectLoading = (state: RootState) => state.weather.loading;
export const selectError = (state: RootState) => state.weather.error;

export default weatherSlice.reducer;
