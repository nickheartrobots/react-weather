import React from 'react';
import renderHTML from 'react-render-html';

export const WeatherWidget = (props) => {
    const { weatherData } = props;
    
    return (
        weatherData && 
            <div>
                <img src={weatherData.results.channel.image.url} />
                <h2>{weatherData.results.channel.item.title}</h2>
                <p>{renderHTML(weatherData.results.channel.item.description)}</p>
            </div>
        
    )
}