import logo from './logo.svg';
import './App.css';
import Search from './components/search/search'; 
import CurrentWeather from './components/current-weather/current-weather';

function App() {

  //Whenever something is searched (dropdown option is clicked), it will print out the data of the city
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
