import style from './blog.module.css';
import ReactMarkdown from 'react-markdown'

import Image from "next/image";

export default function Blog() {

    const conteudo = `
## Introdução
Esse é o conteúdo do guia de presentes. Vamos explorar várias dicas para encontrar o presente ideal!

![Alfajor Guaymallen](https://http2.mlstatic.com/D_NQ_NP_2X_974899-MLA41716257785_052020-F.webp )
*alfajor guaymallen*

## Dicas de Presentes
1. Escolha algo que combine com a personalidade da pessoa.
2. Considere o estilo de vida dela.

### Presentes por Faixa Etária
Aqui vão algumas sugestões de presentes para diferentes idades:

- **Para crianças**: Jogos educativos, brinquedos de montar.
- **Para adultos**: Livros, cursos online.

## Dicas de Presentes
1. Escolha algo que combine com a personalidade da pessoa.
2. Considere o estilo de vida dela.

### Presentes por Faixa Etária
Aqui vão algumas sugestões de presentes para diferentes idades:

- **Para crianças**: Jogos educativos, brinquedos de montar.
- **Para adultos**: Livros, cursos online.

## Dicas de Presentes
1. Escolha algo que combine com a personalidade da pessoa.
2. Considere o estilo de vida dela.

### Presentes por Faixa Etária
Aqui vão algumas sugestões de presentes para diferentes idades:

- **Para crianças**: Jogos educativos, brinquedos de montar.
- **Para adultos**: Livros, cursos online.

## Dicas de Presentes
1. Escolha algo que combine com a personalidade da pessoa.
2. Considere o estilo de vida dela.

![Alfajor Guaymallen](https://http2.mlstatic.com/D_NQ_NP_2X_974899-MLA41716257785_052020-F.webp)
*alfajor guaymallen*

`;
    const titulo = "Como estudar na UBA? Como estudar na UBA?";
    const resumo = "Todo mundo sempre tem alguma duvida sobre como começar a estudar na melhor universidade da América Latina. Esse conteúdo está feito para te ajudar a dar o primeiro passo";
    const dataDePublicada = "12/11/2024"
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