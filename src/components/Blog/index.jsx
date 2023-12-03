import React from 'react'
import "./index.scss";
import HomePopularTitle from '../HomePopularTitle';
import BlogCards from '../BlogCards';
const Blog = () => {
  return (
    <>
      <section id='blog'>
        <div className='blog_content'>
          <HomePopularTitle text={"SOME FEATURES THAT MADE US UNIQUE"} />
          <BlogCards/>
        </div>
      </section>
    </>
  )
}

export default Blog