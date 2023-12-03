import React from 'react'
import "./index.scss";
import HomeHeader from '../../components/HomeHeader';
import HomePopular from '../../components/HomePopular';
import HomeProjects from '../../components/HomeProjects';
import HomeUnique from '../../components/HomeUnique';
import Quality from '../../components/Quality';
import Blog from '../../components/Blog';
import Adverts from '../../components/Adverts';

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomePopular/>
            <HomeProjects/>
            <HomeUnique/>
            <Quality/>
            <Blog/>
            <Adverts/>
        </>
    )
}

export default Home