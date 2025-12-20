// import React from 'react'

// const DailyForecast = (tue_temp_1, tue_temp_2, wed_temp_1, wed_temp_2, thu_temp_1, thu_temp_2, fri_temp_1, fri_temp_2, sat_temp_1, sat_temp_2, sun_temp_1, sun_temp_2, mon_temp_1, mon_temp_2) => {
//   return (
//     <div className='daily-forecast-container'>
        
//         <p className='forecast-title'>Daily Forecast</p>
//         <div className='forecast-section'>

//             <div className='tue-section'>
//                 <p className='tue-title'>Tue</p>
//                 <span><img src='images/icon-drizzle.webp' alt='drizzle-logo'/></span>
//                 <p>{tue_temp_1}</p>
//                 <p>{tue_temp_2}</p>
//             </div>

//             <div className='wed-section'>
//                 <p className='wed-title'>Wed</p>
//                 <span><img src='images/icon-drizzle.webp' alt='drizzle-logo'/></span>
//                 <p>{wed_temp_1}</p>
//                 <p>{wed_temp_2}</p>
//             </div>

//             <div className='thurs-section'>
//                 <p className='thurs-title'>Thu</p>
//                 <span><img src='images/icon-drizzle.webp' alt='drizzle-logo'/></span>
//                 <p>{thu_temp_1}</p>
//                 <p>{thu_temp_2}</p>
//             </div>

//             <div className='fri-section'>
//                 <p className='fri-title'>Fri</p>
//                 <span><img src='images/icon-drizzle.webp' alt='drizzle-logo'/></span>
//                 <p>{fri_temp_1}</p>
//                 <p>{fri_temp_2}</p>
//             </div>

//             <div className='sat-section'>
//                 <p className='sat-title'>Sat</p>
//                 <span><img src='images/icon-drizzle.webp' alt='drizzle-logo'/></span>
//                 <p>{sat_temp_1}</p>
//                 <p>{sat_temp_2}</p>
//             </div>

//             <div className='sund-section'>
//                 <p className='sund-title'>Sun</p>
//                 <span><img src='images/icon-drizzle.webp' alt='drizzle-logo'/></span>
//                 <p>{sun_temp_1}</p>
//                 <p>{sun_temp_2}</p>
//             </div>

//             <div className='mon-section'>
//                 <p className='mon-title'>Mon</p>
//                 <span><img src='images/icon-drizzle.webp' alt='drizzle-logo'/></span>
//                 <p>{mon_temp_1}</p>
//                 <p>{mon_temp_2}</p>
//             </div>
            
//         </div>



//     </div>
//   )
// }

// export default DailyForecast

const DailyForecast = ({ data }) => {
  return (
    <div className="daily-forecast-container">

      <p className="forecast-title">Daily Forecast</p>

      <div className="forecast-section">
        {data.map((item, index) => (
          <div className="day-box" key={index}>
            <p className="day-title">{item.day}</p>

            <span>
              <img src="images/icon-drizzle.webp" alt="weather-icon" />
            </span>

            <p>{item.temp1}°</p>
            <p>{item.temp2}°</p>
          </div>
        ))}
      </div>

    </div>
    
  );
}

export default DailyForecast