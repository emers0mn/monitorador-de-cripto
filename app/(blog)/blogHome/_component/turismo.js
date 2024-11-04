import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

export function Turismo({ image, btDestino }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
    return (

        
            <Slider {...S}>
                <div className={style.ContentConteudoHome}>
                    <div className={style.ContentConteudo}>
                
                            <Link href={btDestino}>
                                <div className={style.detalhe}></div>
                                <img
                                    src={`/img/blogHome/${image}.png`}
                                    width={305}
                                    height={265}
                                    alt='imagem aqui viu'
                                />
                            </Link>
                
                    </div>
                </div>
            </Slider>
        

    )
}