import React, { useState } from "react";

import { MoonLoader } from "react-spinners";

// import classes from "./App.less";
import assetMapping from "../../assets/assetMapping.json";
// import Card from "../../elements/Card/Card";
import Header from "../../components/Header/index.js";
// import Footer from "../../components/Footer/Footer";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
// import Preview from "../../components/Preview/Preview";
// import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";

const App = () => {
  const [Input, setInput] = useState("");
  const [weatherDetails, setWeatherDetails] = useState({
    temperature: null,
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let tryAgain = () => {
    setInput("");
    setWeatherDetails({});
    setError(false);
  };
  return (
    <div>
      <Header
        color={
          assetMapping.colors[error ? "error" : weatherDetails.description]
        }
        onClickHandler={tryAgain}
      />
    </div>
  );
};

export default App;
