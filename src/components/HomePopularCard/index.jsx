import React from 'react'
import "./index.scss";
const HomePopularCard = ({img}) => {
  return (
    <div className='home_popular_card'>
        <div className='home_popular_card_content' >
            <img src={img} alt="" />
            <h4>GREEN BUTTER SOFA</h4>
            <p>Sony laptops are among the most well known laptops on today’s market. Sony is a name that.</p>
        </div>
    </div>
  )
}

export default HomePopularCard