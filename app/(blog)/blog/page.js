'use client'
import { useState, useEffect } from 'react';
import style from './blog.module.css';
import ReactMarkdown from 'react-markdown'
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function BlogPage() {

    const [conteudo, setConteudo] = useState();
    const [tema, setTema] = useState();
    const [slug, setSlug] = useState();
    const [titulo, setTitulo] = useState();
    const [resumo, setResumo] = useState();
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
                        <small>/Estudar na Argentina</small>
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
        </div>
    );
}