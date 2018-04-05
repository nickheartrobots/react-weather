import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CurrentComponent.css'
class Current extends Component {
    
    render(){
        const { current } = this.props.weather;
        //console.log(current)

        return (
            <div>
                { current && 
                <div>
                    <h2>Current Weather Conditions in {current.name}</h2>
                    <hr className="md-4" />
                    <div className="row">
                        <div className="col-sm-6 flexcol">
                            <h3>Temp {current.main.temp}&#176;</h3>
                            <h5>High: {current.main.temp_max}&#176;</h5>
                            <h5>Low: {current.main.temp_min}&#176;</h5>
                        </div>
                        <div className="col-sm-6 flexcol">
                            <img className="img-fluid" alt="Responsive image" src={`http://openweathermap.org/img/w/${current.weather[0].icon}.png`} />
                            <h4 className="">{current.weather[0].main}</h4>
                            <h5>Wind Speed: {current.wind.speed} mph</h5>
                            <h5>Wind Direction: {current.wind.deg}&#176;</h5>
                        </div>
                    </div>
                </div> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		weather: state.Weather
	}
}

export default connect(mapStateToProps)(Current);