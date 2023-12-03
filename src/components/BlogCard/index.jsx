import React from 'react'
import "./index.scss";
const BlogCard = ({img}) => {
  return (
    <div className='blog_card'>
      <div className='blog_card_img'>
        <img src={img} alt="" />
      </div>
      <div className='blog_card_text'>
        <div className='blog_card_text_button'>
          <button className='travel_btn btn'>Travel</button>
          <button className='life_btn btn'>Life style</button>
        </div>
        <h4>LOW COST ADVERTISING</h4>
        <p>Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.</p>
        <span>31st January, 2018</span>
      </div>
    </div>
  )
}

export default BlogCard