import style from './blog.module.css';
import ReactMarkdown from 'react-markdown'

import Image from "next/image";

export default function Blog() {

    const conteudo = `
## Introdução
Esse é o conteúdo do guia de presentes. Vamos explorar várias dicas para encontrar o presente ideal!

![Alfajor Guaymallen](https://http2.mlstatic.com/D_NQ_NP_2X_974899-MLA41716257785_052020-F.webp)

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
    const titulo = "Vou fazer um teste aqui só para saber se.";
    const resumo = "Aqui vai ser um resumo sobre o conteúdo que estou fazendo, acho que é um resumo que pode ter até mais do que 150 caracteres sem problema. Vou fazer um teste.";

    return (
        <div className={style.content}>

            <div className={style.contentCapa}>
                <div>
                    <div className={style.contenttitle}>
                        <small>Tema</small>
                        <h1>{titulo}</h1>
                        <p>
                            {resumo}
                            <br />
                            <span>10/11/2024</span>
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
                </div>

                <div className={style.capa}>
                </div>

            </div>

            <div className={style.conteinerConteudo}>
                <div className={style.banner}>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SdsR9K6qNNxkExuSRl5RWtaas2EIeFLl8A&s'
                    />
                    <small>Informação sobre a imagem</small>
                </div>
                <div className={style.contentConteudo}>
                    <ReactMarkdown>
                        {conteudo}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}