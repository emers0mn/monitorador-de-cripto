"use client"
import { useState, useEffect } from 'react';
import style from '../blog.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { useParams } from 'next/navigation' // Importa o hook useRouter do Next.js


export const runtime = 'edge';

export default function Blog() {
  const params = useParams();
  const { slug } = params; // O slug vem do parâmetro de URL
  const [conteudo, setConteudo] = useState(null);

  useEffect(() => {
    // Faz a requisição no lado do cliente
    const fetchData = async () => {
      const response = await fetch(`https://blog.pesosargentinoshoje.workers.dev/api/conteudoBlog/${slug}`);
      const result = await response.json();
      setConteudo(result);
    };

    fetchData();
  }, [slug]);

  if (!conteudo) return <div>Loading...</div>;
 
  return (
    <div className={style.content}>
      <div className={style.contentCapa}>
        <div className={style.conteinerTitle}>
          <div className={style.contenttitle}>
            <div>
              <small>/{conteudo.TEMA}</small>
              <h1>{conteudo.TITULO}</h1>
            </div>
            <div className={style.resumoBanner}>
              <div>
                <p>
                  {conteudo.RESUMO}
                  <br />
                  <span>{dataDePublicada}: data de publicação</span>
                </p>
                <div className={style.contentCompartilharIcon}>
                  <img
                    className={style.compartilharIcon}
                    width={15}
                    height={15}
                    src="https://icons.veryicon.com/png/o/miscellaneous/foundation-icon-5/link-86.png"
                    alt="Capa do post"
                  />
                  <img
                    className={style.compartilharIcon}
                    width={15}
                    height={15}
                    src="https://logospng.org/download/whatsapp/logo-whatsapp-preto-branco-1024.png"
                    alt="Capa do post"
                  />
                </div>
              </div>
              <div className={style.banner}>
                <img src={conteudo.CAPA || 'https://via.placeholder.com/800x400'} alt="Capa do blog" />
                <small>Informação sobre a imagem</small>
              </div>
            </div>
          </div>
        </div>

        <div className={style.capa}></div>
      </div>

      <div className={style.conteinerConteudo}>
        <div className={style.contentConteudo}>
          <ReactMarkdown>{conteudo.CONTEUDO}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
