import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div>
            <img src='images/logo.svg' alt='weather-logo'></img>
            <div>
                <button> Units <span><img src="images/icon-dropdown.svg" alt="dropdown-logo" /></span></button>
            </div>
        </div>

        

        {/* <div>
            <button> Units &#129171;</button>
            <div className='dropdown-menu'>

                <div className='section'>
                    <p className='label'> Quick Switch</p>
                    <button className='toggle-button'>Switch to Metric</button>
                </div>

                <div className='section'>
                    <p className='label'>Temperature</p>
                    <div className='btn-group'>
                        <button className='option active'>Celsius (*C)</button>
                        <button className='option'>Fahrenheit (*F)</button>
                    </div>
                </div>

                <div className='section'>
                    <p className='label'>Wind Speed</p>
                    <div className='btn-group'>
                        <button className='option active'>Km/h</button>
                        <button className='option'>mph</button>
                    </div>
                </div>

                <div className='section'>
                    <p className='label'>Percipitation </p>
                    <div className='btn-group'>
                        <button className='option active'>Millimeters (mm)</button>
                        <button className='option'>Inches (in)</button>
                    </div>
                </div>



                 
            </div>
        </div> */}
    </div>
  )
}

export default NavBar