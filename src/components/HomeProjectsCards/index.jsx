import React from 'react'
import "./index.scss";
import HomeProjectsCard from '../HomeProjectsCard';
const HomeProjectsCards = () => {
  return (
    <div className='home_projects_cards'>
        <HomeProjectsCard style={"img_1 home_projects_card"} img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-1.jpg.webp"}/>
        <HomeProjectsCard style={"img_2 home_projects_card "} img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-2.jpg.webp"}/>
        <HomeProjectsCard style={"img_3 home_projects_card "} img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-3.jpg.webp"}/>
        <HomeProjectsCard style={"img_4 home_projects_card "} img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-4.jpg.webp"}/>
    </div>
  )
}

export default HomeProjectsCards