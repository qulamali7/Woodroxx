import React from 'react'
import "./index.scss";
import HomeProjects from '../../components/HomeProjects';
import PageHeader from "../../components/PageHeader"
import HomePopularTitle from '../../components/HomePopularTitle';
const Projects = () => {
  return (
    <>
    <PageHeader h2={"PROJECTS"} span1={"Home"} span2={"Projects"}/>
    <HomePopularTitle text={"LATEST COMPLETED PROJECTS"}/>
    <HomeProjects/>
    </>
  )
}

export default Projects