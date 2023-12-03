import React from 'react'
import "./index.scss";
import HomeProjects from '../../components/HomeProjects';
import HomeUnique from '../../components/HomeUnique';
import Adverts from '../../components/Adverts';
import AboutStart from '../../components/AboutStart';
import PageHeader from '../../components/PageHeader';
const About = () => {
  return (
    <>
    <PageHeader h2={"About Us"} span1={"Home"} span2={"About Us"}/>
    <AboutStart/>
    <HomeProjects/>
    <HomeUnique/>
    <Adverts/>

    </>
  )
}

export default About