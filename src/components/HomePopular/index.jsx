import React from 'react'
import "./index.scss";
import HomePopularTitle from '../HomePopularTitle';
import HomePopularCards from '../HomePopularCards';
const HomePopular = () => {
  return (
    <>
    <section id='home_popular'>
        <div className='home_popular_content'>
            <HomePopularTitle text={"MOST POPULAR FURNITURES"}/>
            <HomePopularCards/>
        </div>
    </section>
    </>
  )
}

export default HomePopular