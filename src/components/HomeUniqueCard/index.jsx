import React from 'react'
import "./index.scss";
const HomeUniqueCard = ({text,styleIcon}) => {
  return (
    <div className='home_unique_card'>
        <div className='home_unique_card_content'>
            <h4><i className={styleIcon}></i>{text}</h4>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
        </div>
    </div>
  )
}

export default HomeUniqueCard