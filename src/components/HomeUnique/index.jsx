import React from 'react'
import "./index.scss";
import HomePopularTitle from '../HomePopularTitle';
import HomeUniqueCards from '../HomeUniqueCards';
const HomeUnique = () => {
    return (
        <>
            <section id='home_unique'>
                <div className='home_unique_content'>
                    <HomePopularTitle text={"SOME FEATURES THAT MADE US UNIQUE"} />
                    <HomeUniqueCards />
                </div>
            </section>
        </>
    )
}

export default HomeUnique