import React from 'react';
import Info from './Components/Info';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './App.css';

const API_KEY = 'b1d84eff990c402c9c1162413201704';

class App extends React.Component {

  state = {
    date: undefined,
    icon: undefined,
    city: undefined,
    localtime: undefined,
    avgtemp: undefined,
    rain: undefined,
    visibility: undefined,
    wind_speed: undefined,
    date1: undefined,
    icon1: undefined,
    avgtemp1: undefined,
    rain1: undefined,
    visibility1: undefined,
    wind_speed1: undefined,
    date2: undefined,
    icon2: undefined,
    avgtemp2: undefined,
    rain2: undefined,
    visibility2: undefined,
    wind_speed2: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();
    let api_city = event.target.elements.city.value;
    if (api_city !== undefined) {

      let api_data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${api_city}&days=3`);

      if (api_data !== undefined) {
        let api_json = await api_data.json();

        this.setState({
          date: api_json.forecast.forecastday[0].date,
          icon: api_json.forecast.forecastday[0].day.condition.icon,
          city: api_json.location.name,
          localtime: api_json.location.localtime,
          avgtemp: api_json.forecast.forecastday[0].day.avgtemp_c,
          rain: api_json.forecast.forecastday[0].day.daily_chance_of_rain,
          visibility: api_json.forecast.forecastday[0].day.avgvis_km,
          wind_speed: api_json.forecast.forecastday[0].day.maxwind_kph,
          date1: api_json.forecast.forecastday[1].date,
          icon1: api_json.forecast.forecastday[1].day.condition.icon,
          avgtemp1: api_json.forecast.forecastday[1].day.avgtemp_c,
          rain1: api_json.forecast.forecastday[1].day.daily_chance_of_rain,
          visibility1: api_json.forecast.forecastday[1].day.avgvis_km,
          wind_speed1: api_json.forecast.forecastday[1].day.maxwind_kph,
          date2: api_json.forecast.forecastday[2].date,
          icon2: api_json.forecast.forecastday[2].day.condition.icon,
          avgtemp2: api_json.forecast.forecastday[2].day.avgtemp_c,
          rain2: api_json.forecast.forecastday[2].day.daily_chance_of_rain,
          visibility2: api_json.forecast.forecastday[2].day.avgvis_km,
          wind_speed2: api_json.forecast.forecastday[2].day.maxwind_kph
        });
      }
    }
  }

  render() {
    return(      
      <div id="main_box"> 
        <Info />
        <Form weather={this.getWeather}  />
        <Weather 
          date={this.state.date}
          icon={this.state.icon}
          city={this.state.city}
          localtime={this.state.localtime}
          avgtemp={this.state.avgtemp}
          rain={this.state.rain}
          visibility={this.state.visibility}
          wind_speed={this.state.wind_speed}
          date1={this.state.date1}
          icon1={this.state.icon1}
          avgtemp1={this.state.avgtemp1}
          rain1={this.state.rain1}
          visibility1={this.state.visibility1}
          wind_speed1={this.state.wind_speed1}
          date2={this.state.date2}
          icon2={this.state.icon2}
          avgtemp2={this.state.avgtemp2}
          rain2={this.state.rain2}
          visibility2={this.state.visibility2}
          wind_speed2={this.state.wind_speed2}
        />
        <h5>Copyright; &copy; Мой сайт</h5>
    </div>
    );
    

  }

}

export default App;