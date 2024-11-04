'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../blogHome/_component/turismo.module.css'

import Image from "next/image";

export default function Blog() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img
                    src={`/img/blogHome/caminito.png`}
                    width={305}
                    height={265}
                    alt='imagem aqui viu'
                />
            </div>

            <div>
                <img
                    src={`/img/blogHome/caminito.png`}
                    width={305}
                    height={265}
                    alt='imagem aqui viu'
                />
            </div>

        </Slider>
    );
}