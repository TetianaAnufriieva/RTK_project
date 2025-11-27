import { useState } from "react";

import styles from "./Weather.module.css";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWeather } from "./weatherSlice";
import type { RootState } from "../../app/store";
import { ClipLoader } from "react-spinners";

export const Weather = () => {
  const [city, setCity] = useState<string>("");
  const dispatch = useAppDispatch();
  const {
    data: weather,
    loading,
    error,
  } = useAppSelector((state: RootState) => state.weather);

  const handleSearch = () => {
    if (city.trim() === "") return;
    dispatch(fetchWeather(city));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.app_title}>Weather App</h1>

      <div className={styles.search_container}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && (
        <div className={styles.loadingWrapper}>
          <ClipLoader size={50} />
        </div>
      )}

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.weather_card}>
          <h2 className={styles.city_name}>
            {weather.name}, {weather.sys.country}
          </h2>

          <div className={styles.temperature}>{weather.main.temp}°C</div>
          <div className={styles.feels_like}>
            FEELS LIKE: {weather.main.feels_like}°C
          </div>

          <img
            className={styles.weather_icon}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="Weather Icon"
          />

          <p className={styles.weather_description}>
            {weather.weather[0].description}
          </p>

          <div className={styles.details}>
            <div className={styles.detail}>
              <div className={styles.detail_title}>HUMIDITY</div>
              <div className={styles.detail_value}>
                {weather.main.humidity}%
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detail_title}>WIND</div>
              <div className={styles.detail_value}>
                {weather.wind.speed} m/s
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
