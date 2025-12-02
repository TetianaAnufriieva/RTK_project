import { useState } from "react";

import styles from "./Weather.module.css";

import { ClipLoader } from "react-spinners";
import { useGetWeatherQuery } from "./weatherApi";

export const Weather = () => {
  const [city, setCity] = useState<string>("");
  const {
    data: weather,
    error,
    isFetching,
    refetch,
  } = useGetWeatherQuery(city, {
    skip: !city, //  не отправляем запрос пока нет города
  });

  // const getTemperatureColor = (temp: number): string => {
  //   if (temp < -10) return "text-blue-300";
  //   if (temp < 0) return "text-blue-400";
  //   if (temp < 10) return "text-blue-500";
  //   if (temp < 20) return "text-yellow-500";
  //   if (temp < 30) return "text-orange-500";
  //   return "text-red-500";
  // };

  // | Поведение                         | Что писать                 |
  // | --------------------------------- | -------------------------- |
  // | Авто-запрос при изменении city    | `skip: false`              |
  // | Запрос только по кнопке           | `skip: true` + `refetch()` |
  // | Запрос только если city не пустой | `skip: !city`              |

  // const { data, error, isFetching, refetch } =
  // Делаем деструктуризацию результата работы хука.

  // useGetWeatherQuery(city, {
  // Вызываем запрос с аргументом city.
  // Второй аргумент — объект настроек.

  // skip: !city,
  // Если city пустая строка → !city === true → запрос не выполняется.
  // То есть, пока пользователь ничего не ввёл, запрос не уйдёт.

  // });
  // Закрываем вызов хука.

  // В итоге у нас есть:

  // data — результат запроса (ответ от API)

  // error — ошибка, если запрос не удался

  // isFetching — флаг загрузки

  // refetch — функция, чтобы можно было вручную перезапустить запрос

  const handleSearch = () => {
    if (!city) {
      alert("Введите город");
      return;
    }
    refetch(); // вручную запускаем запрос
  };
  //   const handleSearch = () => {
  // Обработчик клика по кнопке "Получить погоду".

  // if (!city) {
  // Если город не введён…

  // alert("Введите город");
  // Показываем пользователю предупреждение.

  // return;
  // Прерываем выполнение функции.

  // }
  // Конец проверки.

  // refetch();
  // Если город введён — вручную запускаем запрос.
  // Хотя хук уже «подписан» на city, мы используем refetch, чтобы показать студентам явный вызов.

  // };
  // Конец функции handleSearch.

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

      {isFetching && (
        <div className={styles.loadingWrapper}>
          <ClipLoader size={50} />
        </div>
      )}

      {error && <p className={styles.error}>Error: the city was not found</p>}

      {weather && (
        <div className={styles.weather_card}>
          <h2 className={styles.city_name}>
            {weather.name}, {weather.sys.country}
          </h2>

          <div className={styles.temperature}>{weather.main.temp}°C</div>

          {/* <div
            className={`text-4xl font-bold my-2 ${getTemperatureColor(
              weather.main.temp
            )}`}
          >
            {weather.main.temp}°C
          </div> */}

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
