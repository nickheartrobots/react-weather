import React, { Component } from 'react';
import './App.css'
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { getWeatherByZip, getWeatherByLocation } from './Actions/Weather'

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			zip: ""
		}
	}

	handleGeoClick = (event) => {
		const { dispatch } = this.props;
		dispatch(getWeatherByLocation());
	}

	handleZipClick = () => {
		const { dispatch } = this.props;
		dispatch(getWeatherByZip(this.state.zip));
	}

	handleZipChange = (event) => {
		this.setState({zip: event.target.value})
	}

	render() {
		const { geoLocation, weather, location } = this.props;
		const path = location.pathname;

		return (
			<div>
				<div className="jumbotron jumbo">
					<div className="container">
						<h1 className="display-4">Nick's Weather App</h1>
						<p className="lead">This is a Simple Weather App created using Reactjs, Redux, Bootstrap, and the Open Weather Map API</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-sm-3">
							<div className="input-group mb-3">
								<input type="text" className="form-control" placeholder="Zip Code" value={this.state.zip} onChange={this.handleZipChange}/>
								<div className="input-group-append">
									<button name="zip" type="button" className="btn btn-primary btn-sm" onClick={this.handleZipClick}>Select</button>
								</div>
							</div>
						</div>
						<p className="lead or">- OR -</p>
						<div className="col-sm-3">
							<button name="geo" className="btn btn-primary" onClick={this.handleGeoClick}>Current Location</button>
						</div>
					</div>
				</div>
					<div className="container main">
						{ weather.current && weather.forecast &&
							<div>
								<ul className="nav nav-tabs">
									<li className="nav-item"><Link className={ path == "/current" ? "nav-link active" : "nav-link" } to="/current">Current Weather Conditions</Link></li>
									<li className="nav-item"><Link className={ path == "/forecast" ? "nav-link active" : "nav-link" } to="/forecast">5 Day Forecast</Link></li>
								</ul>
							{ this.props.children }
							</div>
						}
					</div>
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