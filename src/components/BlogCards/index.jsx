import React from 'react'
import "./index.scss";
import BlogCard from '../BlogCard';
const BlogCards = () => {
  return (
    <div className='blog_cards'>
        <BlogCard img={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp"}/>
        <BlogCard img={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg"} />
        <BlogCard img={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg"}/>
    </div>
  )
}

export default BlogCards