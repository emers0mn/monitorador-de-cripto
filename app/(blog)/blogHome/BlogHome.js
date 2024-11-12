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
                <div className={style.conteudoBlog}>
                    {/* Mini Blog */}
                    <div className={style.cotentBlogHome}>
                        <h2>Últimos conteúdos</h2>
                        <Blog
                            image={"blogHomeImage"}
                            titulo={"Como estudar na Argentina!"}
                            autor={"Emerson Pereira"}
                            data={"02/11/2024"}
                            resumo={"Sendo melhor universidade da América Latina, não é extranho imagino o porque tantos Brasileiros decidem mudar de vida para poder morar em Buenos Aires..."}
                            btDestino={"/blog"}
                        />
                        <Blog
                            image={"blogHomeImage"}
                            titulo={"Como estudar na Argentina!"}
                            autor={"Emerson Pereira"}
                            data={"02/11/2024"}
                            resumo={"Sendo melhor universidade da América Latina, não é extranho imagino o porque tantos Brasileiros decidem mudar de vida para poder morar em Buenos Aires..."}
                            btDestino={"/blog/como-estudar-na-argentina"}
                        />
                        <Blog
                            image={"blogHomeImage"}
                            titulo={"Como estudar na Argentina!"}
                            autor={"Emerson Pereira"}
                            data={"02/11/2024"}
                            resumo={"Sendo melhor universidade da América Latina, não é extranho imagino o porque tantos Brasileiros decidem mudar de vida para poder morar em Buenos Aires..."}
                            btDestino={"/blog/como-estudar-na-argentina"}
                        />


                        {/* Botão veja mais */}
                        <div className={style.btVejaMaisConteudo}>
                            <Link href={"/blog"}>Veja mais conteúdo ➡️</Link>
                        </div>
                    </div>

                    {/* Interessante */}
                    <div className={style.containerInteressante}>
                        <div className={style.contentAnuncio}>
                            <small>espaço publicitário</small>
                            <div className={style.anuncio}></div>
                        </div>

                        <div >
                            <h2>Conteúdo rápido</h2>
                            <div className={style.contentInteressante}>
                                <div>
                                    <h3>Conteudo</h3>
                                    <Link href={"/"}>
                                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.</p>
                                    </Link>
                                </div>
                                <div>
                                    <h3>Conteudo</h3>
                                    <Link href={"/"}>
                                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.</p>
                                    </Link>
                                </div>
                                <div>
                                    <h3>Conteudo</h3>
                                    <Link href={"/"}>
                                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.</p>
                                    </Link>
                                </div>
                                <div className={style.marcaInteressante}>
                                    Interessante
                                </div>
                            </div>

                            {/* <div className={style.contentAnuncio}>
                                <small>espaço publicitário</small>
                                <div className={style.anuncio}></div>
                            </div> */}
                        </div>


                    </div>
                </div>

            </section>


            {/* <section className={style.contentTurismo}>

                <div className={style.cotentTurismoHome}>
                    <h2>Turismo</h2>

                    <div className={style.containerTurismo}>
                        <Turismo
                            image={"caminito"}
                            btDestino={"/turismo/caminito"}
                        />
                        <Turismo
                            image={"caminito"}
                            btDestino={"/turismo/caminito"}
                        />
                        <Turismo
                            image={"caminito"}
                            btDestino={"/turismo/caminito"}
                        />
                        <Turismo
                            image={"caminito"}
                            btDestino={"/turismo/caminito"}
                        />

                        <Turismo
                            image={"caminito"}
                            btDestino={"/turismo/caminito"}
                        />
                    </div>

                </div>
                <Link className={style.btActionDestino} href="/turismo">Veja mais destinos</Link>
            </section> */}

        </div>
    )
}