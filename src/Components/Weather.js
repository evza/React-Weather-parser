import React from 'react';
import '../App.css';

class Weather extends React.Component {

  render() {
    return(      
      <div id="weather_box">
        <h3>Информация о погоде</h3>
        {
            this.props.city !== undefined &&
            <div id="props_list">
                <table width="70%" border="1" align="center" margin="auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>{this.props.date}</th>
                            <th>{this.props.date1}</th>
                            <th>{this.props.date2}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Погода</td>
                            <td><img src={this.props.icon} width="50" alt=""/></td>
                            <td><img src={this.props.icon1} width="50" alt=""/></td>
                            <td><img src={this.props.icon2} width="50" alt=""/></td>
                        </tr>
                        <tr>
                            <td>Температура</td>
                            <td>{this.props.avgtemp}</td>
                            <td>{this.props.avgtemp1}</td>
                            <td>{this.props.avgtemp2}</td>
                        </tr>
                        <tr>
                            <td>Видимость</td>
                            <td>{this.props.visibility}</td>
                            <td>{this.props.visibility1}</td>
                            <td>{this.props.visibility2}</td>
                        </tr>
                        <tr>
                            <td>Осадки</td>
                            <td>{this.props.rain}</td>
                            <td>{this.props.rain1}</td>
                            <td>{this.props.rain2}</td>
                        </tr>
                        <tr>
                            <td>Ветер</td>
                            <td>{this.props.wind_speed}</td>
                            <td>{this.props.wind_speed1}</td>
                            <td>{this.props.wind_speed2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        } 
      </div>
    );
    

  }

}

export default Weather;