import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const PageHeader = ({h2,span1,span2}) => {
  return (
    <>
    <section id='page_header'>
        <div className='page_banner'>
            <div className='page_header_content'>
                <h2>{h2}</h2>
                <div className='page_header_content_link'>
                    <Link to={"/"}><span>{span1}</span></Link>
                    <i class="fa-solid fa-arrow-right"></i>
                    <Link ><span>{span2}</span></Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PageHeader