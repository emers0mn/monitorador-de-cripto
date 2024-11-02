'use client'
import Link from 'next/link'
import style from './BlogHome.module.css'
import { Blog, Turismo } from './_component/blog';

import Slider from "react-slick";

export default function BlogHome() {

    var settings = {
        dots: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={style.container}>
            <section className={style.contentBlog}>
                <div className={style.cotentBlogHome}>
                    <h2>Mini Blog</h2>
                    <Blog
                        image={"blogHomeImage"}
                        titulo={"Como estudar na Argentina!"}
                        autor={"Emerson Pereira"}
                        data={"02/11/2024"}
                        resumo={"Sendo melhor universidade da América Latina, não é extranho imagino o porque tantos Brasileiros decidem mudar de vida para poder morar em Buenos Aires..."}
                        btDestino={"/blog/como-estudar-na-argentina"}
                    />
                </div>
            </section>

            <section className={style.contentTurismo}>

                <div className={style.cotentTurismoHome}>
                    <h2>Turismo</h2>



                    {/* <Slider {...settings}>
                            <Turismo
                                image={"caminito"}
                                btDestino={"/turismo/caminito"}
                            />
                        </Slider> */}

                    <Turismo
                        image={"caminito"}
                        btDestino={"/turismo/caminito"}
                    />


                </div>
                <Link className={style.btActionDestino} href="/turismo">Veja mais destinos</Link>
            </section>

        </div>
    )
}