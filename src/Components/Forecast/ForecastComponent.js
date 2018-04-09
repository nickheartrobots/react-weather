import React, { Component } from 'react';
import { connect } from 'react-redux';

class Forecast extends Component {
    
    render(){
        const { forecast } = this.props.weather;

        return (
            <div>
                { forecast && 
                    <div>
                        <h2>Forecast for {forecast.city.name}</h2>
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Date Time</th>
                                    <th scope="col">Weather</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col">Temp</th>
                                    <th scope="col">Humidity</th>
                                    <th scope="col">Wind Speed</th>
                                    <th scope="col">Wind Direction</th>
                                </tr>
                            </thead>
                            <tbody>
                                {forecast.list.map((i, idx) => {
                                    return(
                                        <tr key={idx}>
                                            <td>{i.dt_txt}</td>
                                            <td>{i.weather[0].main}</td>
                                            <td><img className="" src={`http://openweathermap.org/img/w/${i.weather[0].icon}.png`} /></td>
                                            <td>{i.main.temp}&#176;</td>
                                            <td>{i.main.humidity}</td>
                                            <td>{i.wind.speed} mph</td>
                                            <td>{i.wind.deg}&#176;</td>
                                        </tr>
                                    )    
                                })}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		weather: state.Weather
	}
}

export default connect(mapStateToProps)(Forecast);