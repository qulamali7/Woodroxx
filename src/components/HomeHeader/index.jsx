import React from 'react'
import "./index.scss";
const HomeHeader = () => {
    return (
        <>
            <section id='home'>
                <div className='home-background'>
                    <div className='home_content'>
                        <div className='home_content_left'>
                            <h2>PRECISE CONCEPT DESIGN FOR STYLISH LIVING</h2>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                            <button>Get Started</button>
                        </div>
                        <div className='home_content_right'>
                            <div className='home_content_right_content'>
                                <div className="home_item">
                                <i class="fa-solid fa-house"></i>
                                </div>
                                <div className="home_item">
                                <i class="fa-regular fa-gem"></i>
                                </div>
                                <div className="home_item">
                                <i class="fa-solid fa-code"></i>
                                </div>
                                <div className="home_item">
                                <i class="fa-solid fa-globe"></i>
                                </div>
                                <div className="home_item">
                                <i class="fa-solid fa-earth-americas"></i>
                                </div>
                                <div className="home_item">
                                <i class="fa-brands fa-react"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHeader