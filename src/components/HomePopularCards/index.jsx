import React from 'react'
import "./index.scss";
import HomePopularCard from '../HomePopularCard'

const HomePopularCards = () => {
  return (
    <div className='home_popular_cards'>
        <HomePopularCard img={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg"}/>
        <HomePopularCard img={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg.webp"}/>
        <HomePopularCard img={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg.webp"}/>
    </div>
  )
}

export default HomePopularCards