import React from 'react'
import "./index.scss";
import AdvertsCard from '../AdvertsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AdvertsCards = () => {
    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 5,
    //     swipeToSlide: true,
    // };
    return (
        <div className='adverts_cards'>
            {/* <Slider {...settings}> */}
                <AdvertsCard img={"https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-1.png.webp"} />
                <AdvertsCard img={"https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-2.png.webp"} />
                <AdvertsCard img={"https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-3.png.webp"} />
                <AdvertsCard img={"https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-4.png.webp"} />
                <AdvertsCard img={"https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-5.png.webp"} />
            {/* </Slider> */}

        </div>
    )
}

export default AdvertsCards