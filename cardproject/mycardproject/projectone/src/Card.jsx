import React from "react";

const Card = ({logo, companyName, postedAgo, jobTitle, jobdeal, jobType, ratePrice, stateCountry,}) => {
  return (
    <div className="job-card">

      <button className="save-btn">Save</button>

      <div className="company-row">

        <div className="logo">
          {logo ? <img src={logo} alt="logo" /> : companyName[1]}
        </div>

        <div>
          <div className="company-name">{companyName}</div>
          <div className="posted">{postedAgo}</div>
        </div>

     </div>

     
      <h3 className="job-title">{jobTitle}</h3>

      
      <div className="tags">
        <span>{jobdeal}</span>
        <span>{jobType}</span>
      </div>

      <hr/>

      <div className="bottom">
        <div>
          <p className="rate">{ratePrice}</p>
          <p className="location">{stateCountry}</p>
        </div>
        <button className="apply-btn">Apply now</button>
      </div>

    </div>
  );
};

export default Card;
