import React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import HeaderTitle from './components/HeaderTitle';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import InfoCards from './components/InfoCards';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';

function App() {

  




  return (
    <div >
      
        <NavBar />

        <HeaderTitle title={"How's the sky looking today?"}/>

        <SearchBar />

        <WeatherCard
        city="Berlin, Germany"
        date="Tuesday, Aug 5, 2025"
        temp={20}
        />

        <InfoCards
        topic={"Feels Like"} 
        temp={"18°"}

        title={"Humidity"}
        percent={"46%"}

        name={"Wind"}
        speed={"14Km/h"}

        Precipitation={"Precipitation"}
        millimeter={"0 mm"}
        />

        <DailyForecast
          data={[
            { day: "Tue", temp1: 20, temp2: 14 },
            { day: "Wed", temp1: 11, temp2: 22 },
            { day: "Thu", temp1: 19, temp2: 13 },
            { day: "Fri", temp1: 24, temp2: 18 },
            { day: "Sat", temp1: 26, temp2: 20 },
            { day: "Sun", temp1: 22, temp2: 17 },
            { day: "Mon", temp1: 21, temp2: 16 },
          ]}
        />

        <HourlyForecast/>

    </div>
  );
}

export default App;




