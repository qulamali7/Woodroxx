import React from 'react'
import "./index.scss";
const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div className='footer_content'>
          <div className='footer_content_about'>
            <h3>ABOUT ME</h3>
            <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
            <p>Copyright ©2023 All rights reserved | This template is made with &#9825;  by <span>Colorlib</span></p>
          </div>
          <div className='footer_content_newsletter'>
            <h3>NEWSLETTER</h3>
            <p>Stay updated with our latest trends</p>
            <form action="">
              <input type="text" placeholder='Enter email address' />
              <button><i class="fa-solid fa-arrow-right"></i></button>
            </form>
          </div>
          <div className='footer_content_follow'>
            <h3>FOLLOW ME</h3>
            <p>Let us be social</p>
            <div className='footer_content_follow_icon'>
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer