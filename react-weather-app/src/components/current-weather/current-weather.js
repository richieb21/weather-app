import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">   
            <div className="top">

                <div>
                    <p className="city">Belgrade</p>
                    <p className="weather-desc">Sunny</p>
                </div>

                <img alt="weather" className="weather-icon" src="icons/01d.png"/>
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details"> 

                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">20°C</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">30 km/h</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">13%</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">1002 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;