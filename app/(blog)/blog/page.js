'use client'
import { useState, useEffect } from 'react';
import style from './blog.module.css';
import ReactMarkdown from 'react-markdown'
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BlogPage() {

    const [conteudo, setConteudo] = useState();
    const [tema, setTema] = useState("Turismo");
    const [slug, setSlug] = useState();
    const [titulo, setTitulo] = useState("Top 3 melhores e mais barato alfajores argentinos");
    const [resumo, setResumo] = useState("Melhor do que só pegar qualquer coisa e levar de presente, é você focar no que é melhor e mais econômico para sua viagem. Largue essa caixa da Havanna e conheça o melhor dos alfajores argentinos.");
    const [banner, setBanner] = useState();
    const [dataDePublicada, setDataDePublicada] = useState();

    const pathname = usePathname();

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch(`https://blog.pesosargentinoshoje.workers.dev/api/conteudoBlog/`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

    return (
        <div className={style.content}>

            <div className={style.contentCapa}>
                <div className={style.conteinerTitle}>
                    <div className={style.contenttitle}>
                        <div>
                            <small>/{tema}</small>
                            <h1>{titulo}</h1>

                        </div>
                        <div className={style.resumoBanner}>

                            <div>
                                <p>
                                    {resumo}
                                    <br />
                                    <span>{dataDePublicada}: data de publicação</span>
                                </p>

                                <div className={style.contentCompartilharIcon}>
                                    <img
                                        className={style.compartilharIcon}
                                        width={15}
                                        height={15}
                                        src="https://icons.veryicon.com/png/o/miscellaneous/foundation-icon-5/link-86.png"
                                        alt="Capa do post" />
                                    <img className={style.compartilharIcon}
                                        width={15}
                                        height={15}
                                        src="https://logospng.org/download/whatsapp/logo-whatsapp-preto-branco-1024.png"
                                        alt="Capa do post" />

                                </div>
                            </div>
                            <div className={style.banner}>
                                <img
                                    src='https://www.redaccion.com.ar/wp-content/uploads/2023/09/Medidas-Plan-Abril-1024-%C3%97-660-px-2023-09-14T083302.326.png'
                                    alt='capa para o blog que por enquanto não é nada'
                                />
                                <small>Informação sobre a imagem</small>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={style.capa}>
                </div>

            </div>

            <div className={style.conteinerConteudo}>
                <div className={style.contentConteudo}>
                    <ReactMarkdown>
                        {conteudo}
                    </ReactMarkdown>
                </div>
            </div>

            {/* referencias */}

            <div className={style.contentReferencias}>

                <h2>Link <span>de referencias</span>:</h2>

                <div className={style.contentReferenciasLinks}>
                    <Link href={"/"}>https://pesos-argentinos-hoje.pages.dev/blog/top-3-melhores-e-mais-barato-alfajores-argentinos</Link>

                    <Link href={"/"}>https://pesos-argentinos-hoje.pages.dev/blog/top-3-melhores-e-mais-barato-alfajores-argentinos</Link>

                    <Link href={"/"}>https://pesos-argentinos-hoje.pages.dev/blog/top-3-melhores-e-mais-barato-alfajores-argentinos</Link>

                </div>

            </div>

            <div className={style.contentDivisor}></div>

            {/* autor */}

            <div className={style.contentAutor}>
                <div className={style.contentAutorPerfil}>
                    <div>
                        <div className={style.contentAutorPerfil}>
                            <img
                                src='/blog/emerson.png'
                                width={75}
                                height={75}
                                alt='Emerson Pereira - autor desta materia'
                            />
                            <div>
                                <h2><span>Emerson</span> Pereira</h2>
                                <small>Estudante de Dados</small>
                            </div>
                        </div>
                    </div>


                    <div className={style.contentAutorRedesSociaisLarge}>

                        <Link href={"/"} className={style.contentAutorLink}>
                            <img
                                src='/blog/github.png'
                                width={42}
                                height={42}
                                alt='Github do: '
                            />
                            <p>Github</p>
                        </Link>

                        <Link href={"/"} className={style.contentAutorLink}>
                            <img
                                src='/blog/Linkedin.png'
                                width={42}
                                height={42}
                                alt='Linkedin do: '
                            />
                            <p>LinkedIn</p>
                        </Link>

                    </div>
                </div>

                <p>Sou estudante de Ciências de dados, da UBA (Universidad de Buenos Aires). Sou Brasileiro e moro em Buenos Aires desde 2022.
                    Sempre estou pesquisando sobre um tema meio aleatório.
                </p>

                <div className={style.contentAutorRedesSociais}>

                    <Link href={"/"} className={style.contentAutorLink}>
                        <img
                            src='/blog/github.png'
                            width={42}
                            height={42}
                            alt='Github do: '
                        />
                        <p>Github</p>
                    </Link>

                    <Link href={"/"} className={style.contentAutorLink}>
                        <img
                            src='/blog/Linkedin.png'
                            width={42}
                            height={42}
                            alt='Linkedin do: '
                        />
                        <p>LinkedIn</p>
                    </Link>

                </div>

            </div>
        </div>
    );
}