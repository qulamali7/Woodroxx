import React, { useState } from 'react'
import "./index.scss";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const stickyNavbar =()=>{
        if (window.scrollY>=100) {
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    window.addEventListener("scroll",stickyNavbar)
    return (
        <>
            <header id={navbar ? "sticky" : "header"}>
                <div className="header_top">
                    <div className='header_top_content'>
                        <div className='header_top_content_left'>
                            <a href="#">Visit Us</a>
                            <a href="#">Online Support</a>
                        </div>
                        <div className='header_top_content_right'>
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_header" >
                    <nav>
                        <div className='main_header_nav_content'>
                            <a href="#">
                                <img className="img1" src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp" alt="" />
                                <img className="img2"src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp" alt="" />
                            </a>
                            <div className='navlist'>
                                <ul className='navlist-ul'>
                                    <NavLink to={""}> <li>Home</li></NavLink>
                                    <NavLink to={"/about"}> <li>About</li></NavLink>
                                    <NavLink><li className='pages'>Pages
                                        <div className="page_down">
                                            <ul className='page-down-list'>
                                                <Link to={"/projects"}><li>Project</li></Link>
                                                <Link to={"/projectDetails"} ><li>Project Details</li></Link>
                                                <li>Elements</li>
                                            </ul>
                                        </div>
                                    </li></NavLink>
                                    <NavLink><li>Blog</li></NavLink>
                                    <NavLink to={"/contact"}>  <li>Contact</li></NavLink>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header