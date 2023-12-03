import React from 'react'
import "./index.scss";
import HomeUniqueCard from '../HomeUniqueCard';
const HomeUniqueCards = () => {
  return (
    <div className='home_unique_cards'>
        <HomeUniqueCard styleIcon={"fa-regular fa-user"} text={"EXPERT TECHNICIANS"}/>
        <HomeUniqueCard styleIcon={"fa-solid fa-id-card"} text={"PROFESSIONAL SERVICE"}/>
        <HomeUniqueCard styleIcon={"fa-solid fa-phone"} text={"GREAT SUPPORT"}/>
        <HomeUniqueCard styleIcon={"fa-solid fa-rocket"} text={"TECHNICAL SKILLS"}/>
        <HomeUniqueCard styleIcon={"fa-regular fa-gem"} text={"HIGHLY RECOMENDED"}/>
        <HomeUniqueCard styleIcon={"fa-regular fa-comment"} text={"POSITIVE REVIEWS"}/>
    </div>
  )
}

export default HomeUniqueCards