import logo from './logo.svg';
import './App.css';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';

import Search from './components/search/search'; 
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';

function App() {

  const [ currentWeather, setCurrentWeather ] = useState(null);
  const [ forecast, setForecast ] = useState(null);

  //Whenever something is searched (dropdown option is clicked), it will print out the data of the city
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    //Fetches weather using the API call
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    //Sets currentWeather and forecast using a hook. Uses a 
    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecast({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather, forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
