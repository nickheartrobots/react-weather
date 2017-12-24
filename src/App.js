import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { getGeoLocation } from './Actions/GeoLocation'; 

import { WeatherWidget } from './Components/Weather'

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getGeoLocation());
	}

	render() {
		const { geoLocation, weather } = this.props;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				{ geoLocation.isAvailable && geoLocation.position &&
					<p className="App-intro">
						Lat: { geoLocation.position.coords.latitude } Long: { geoLocation.position.coords.longitude }
					</p>
				}
				<WeatherWidget weatherData={weather.data} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		geoLocation: state.GeoLocation,
		weather: state.Weather
	}
}

export default connect(mapStateToProps)(App);