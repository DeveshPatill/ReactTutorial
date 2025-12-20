import React from 'react'

const InfoCards = ({topic, temp, title, percent, name, speed, Precipitation, millimeter}) => {
  return (
    <div className='info-section'>

        <div className='content'>
             <span className='titleone'>{topic}</span>
             <span className='titletwo'>{temp}</span>
        </div>

        <div className='content'>
             <span className='titleone'>{title}</span>
             <span className='titletwo'>{percent}</span>
        </div>

        <div className='content'>
             <span className='titleone'>{name}</span>
             <span className='titletwo'>{speed}</span>
        </div>

        <div className='content'>
             <span className='titleone'>{Precipitation}</span>
             <span className='titletwo'>{millimeter}</span>
        </div>

        

        

    </div>
  )
}

export default InfoCards