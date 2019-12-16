import React, { useState } from "react";

import { MoonLoader } from "react-spinners";

import styles from "./App.less";
import assetMapping from "../../assets/assetMapping.json";
import Card from "../../elements/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import WeatherDetails from "../../components/WeatherDetails";
import Preview from "../../components/Preview";
import ErrorNotice from "../../components/ErrorNotice";

const App = () => {
  const [Input, setInput] = useState("");
  const [weatherDetails, setWeatherDetails] = useState({
    temperature: null,
    description: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let tryAgain = () => {
    setInput("");
    setWeatherDetails({});
    setError(false);
  };
  let onSearch = e => {
    setInput(e.target.value);
  };
  let goSearch = () => {
    const city = Input;
    const api_key = "adab95682ba390a869429c0983ed4df6";
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const url = api_url + `?q=${city}&appid=${api_key}&units=metric`;
    new Promise(resolve => {
      setWeatherDetails({});
      setLoading(true);
      setError(false);
      resolve();
    }).then(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (data.cod === 200) {
            setWeatherDetails({
              temperature: data.main.temp,
              description: data.weather[0].main
            });
            setLoading(false);
          } else {
            throw data.cod;
          }
        })
        .catch(err => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
    });
  };
  let cardContent = <Preview />;
  if (loading) {
    cardContent = <MoonLoader />;
  } else if (error) {
    cardContent = <ErrorNotice onClickHandler={tryAgain} />;
  } else if (weatherDetails.temperature && weatherDetails.description !== "") {
    cardContent = <WeatherDetails data={weatherDetails} />;
  }
  return (
    <div className={styles.wrapper}>
      <Header
        color={
          assetMapping.colors[error ? "error" : weatherDetails.description]
        }
        onClickHandler={tryAgain}
      />
      <main className={styles.main}>
        <SearchBar
          value={Input}
          onChangeHandler={onSearch}
          onClickHandler={goSearch}
          error={error}
        />
        <Card>{cardContent}</Card>
      </main>
      <Footer onClickHandler={tryAgain} />
    </div>
  );
};

export default App;
