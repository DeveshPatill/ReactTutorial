import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="card-container">
      <Card
        logo={"/airbnblogo.jpeg"} 
        companyName={"Airbnb"} postedAgo={"5 days ago"} 
        jobTitle={"Junior UI/UX Designer"} 
        jobdeal={"Contract"} jobType={"Remote"}
        ratePrice={"$100/hr"} stateCountry={"Delhi, India"}
      />

      <Card
        logo={"/apple.png"}
        companyName={"Apple"} postedAgo={"5 days ago"}
        jobTitle={"Graphic Designer"}
        jobdeal={"Full-Time"} jobType={"Onsite"}
        ratePrice={"$85-120k"} stateCountry={"Kerala, India"}
      />
    </div>
  );
}

export default App;
