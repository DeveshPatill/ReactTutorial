import React from 'react'

const WeatherCard = ({city, country, date, temp}) => {
  return (
    <div className="weather-card">
      <img src="images/bg-today-large.svg" className="card-img" alt="weather background" />
      <img src='images/icon-sunny.webp' className='sun-img' alt='sun-logo'/>

     
      <div className="content">

        <div className="left">
          <h2>{city}</h2>
          <p>{date}</p>
        </div>

        <div className="right">
          <h1>{temp}°</h1>
        </div>

      </div>

    </div>
  )
}

export default WeatherCard