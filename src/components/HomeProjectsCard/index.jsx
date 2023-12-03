import React from 'react'
import "./index.scss";
const HomeProjectsCard = ({style,img}) => {
  return (
    <div className={style}>
        <img src={img} alt="" />
        <div className='home_projects_card_hover'>
            <h4>Alex Complex for esidence</h4>
            <p>LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer.</p>
        </div>
    </div>
  )
}

export default HomeProjectsCard