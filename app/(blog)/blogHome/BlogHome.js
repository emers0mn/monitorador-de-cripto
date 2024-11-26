
import Link from 'next/link'
import style from './BlogHome.module.css'
import { Blog, Turismo } from './_component/blog';

import LoadingSpinner from '@/app/_components/spinner/LoadingSpinner';

export default async function BlogHome() {

    const conteudos = await fetch(`https://blog.pesosargentinoshoje.workers.dev/api/conteudoBlog`,
        { next: { revalidate: 60 } }
    ).then((res) => {
        return res.json();
    });

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };



    return (
        <div className={style.container}>


            <section className={style.contentBlog}>

                <article className={style.conteudoBlog}>
                    {/* Mini Blog */}
                    <div className={style.cotentBlogHome}>
                        <h2>Últimos conteúdos</h2>


                        {conteudos == null ?

                            <div>
                                <Blog
                                    image={"/blog/turismo/top3_alfajor/banner_alfajor.jpg"}
                                    titulo={"Top 3 melhores e mais barato alfajores argentinos"}
                                    tema={"Turismo/buenos aires"}
                                    data={"02/02/2020"}
                                    resumo={truncateText("Melhor do que só pegar qualquer coisa e levar de presente, é você focar no que é melhor e mais econômico para sua viagem. Largue essa caixa da Havanna e conheça o melhor dos alfajores argentinos.", 90)}
                                    btDestino={"top-3-melhores-e-mais-barato-alfajores-argentinos"}
                                />

                                <Blog
                                    image={"/blog/turismo/top3_alfajor/banner_alfajor.jpg"}
                                    titulo={"Top 3 melhores e mais barato alfajores argentinos"}
                                    tema={"Turismo"}
                                    data={"02/02/2020"}
                                    resumo={truncateText("Melhor do que só pegar qualquer coisa e levar de presente, é você focar no que é melhor e mais econômico para sua viagem. Largue essa caixa da Havanna e conheça o melhor dos alfajores argentinos.", 90)}
                                    btDestino={"top-3-melhores-e-mais-barato-alfajores-argentinos"}
                                />

                                <Blog
                                    image={"/blog/turismo/top3_alfajor/banner_alfajor.jpg"}
                                    titulo={"Top 3 melhores e mais barato alfajores argentinos"}
                                    tema={"Turismo"}
                                    data={"02/02/2020"}
                                    resumo={truncateText("Melhor do que só pegar qualquer coisa e levar de presente, é você focar no que é melhor e mais econômico para sua viagem. Largue essa caixa da Havanna e conheça o melhor dos alfajores argentinos.", 90)}
                                    btDestino={"top-3-melhores-e-mais-barato-alfajores-argentinos"}
                                />
                            </div>

                            // <LoadingSpinner />

                            :
                            conteudos.slice(0, 3).map((conteudo) =>

                                <div key={conteudo.POST_ID}>
                                    <Blog
                                        image={conteudo.CAPA}
                                        titulo={conteudo.TITULO}
                                        tema={conteudo.TEMA}
                                        data={conteudo.DATA}
                                        resumo={truncateText(conteudo.RESUMO, 90)}
                                        btDestino={conteudo.SLUG}
                                    />
                                </div>
                            )}


                        {/* Botão veja mais
                        <div className={style.btVejaMaisConteudo}>
                            <Link href={"/blog"}>Veja mais conteúdo ➡️</Link>
                        </div>
                        */}
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
                </article>

            </section>

            

        </div>
    )
}