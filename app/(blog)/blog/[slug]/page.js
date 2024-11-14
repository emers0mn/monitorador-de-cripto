"use client"
import { useState, useEffect } from 'react';
import style from '../blog.module.css';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation' // Importa o hook useRouter do Next.js
import Link from 'next/link';


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
                  <span>{conteudo.DATA}: data de publicação</span>
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

      {/* referencias */}

      <div className={style.contentReferencias}>

        <h2>Link <span>de referencias</span>:</h2>

        <div className={style.contentReferenciasLinks}>
          <Link href={"/"}>https://pesos-argentinos-hoje.pages.dev/</Link>

          <Link href={"/"}>https://pesos-argentinos-hoje.pages.dev/</Link>

          <Link href={"/"}>https://pesos-argentinos-hoje.pages.dev/</Link>

        </div>

      </div>

      <div className={style.contentDivisor}></div>

      {/* autor */}

      <div className={style.contentAutor}>
        <div className={style.contentAutorPerfil}>
          <div>
            <div className={style.contentAutorPerfil}>
              <img
                src='pesos.imgix.net/blog/emerson.png'
                width={75}
                height={75}
                alt={`${conteudo.NOME_COMPLETO_AUTOR} - autor desta materia`}
              />
              <div>
                <h2>{conteudo.NOME_COMPLETO_AUTOR}</h2>
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

        <p>{conteudo.DESCRICAO}
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
