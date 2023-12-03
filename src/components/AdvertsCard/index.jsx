import React from 'react'
import "./index.scss";
const AdvertsCard = ({img}) => {
  return (
    <div className='adverts_card'>
        <img src={img} alt="" />
    </div>
  )
}

export default AdvertsCard