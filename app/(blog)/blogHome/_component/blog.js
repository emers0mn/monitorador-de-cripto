import Link from 'next/link'
import style from '../BlogHome.module.css'


export function Blog({ image, titulo, autor, data, resumo, btDestino }) {
    return (
        <div className={style.ContentConteudoHome}>
            <div className={style.ContentConteudo}>
                <div>
                    <div className={style.detalhe}></div>
                    <img
                        src={`/img/blogHome/${image}.png`}
                        width={305}
                        height={265}
                        alt='imagem aqui viu'
                    />
                </div>
                <div>
                    <div>
                        <h3>{titulo}</h3>
                        <div>
                            <small>Autor: <strong>{autor}</strong></small>
                            <small>Postagem: <strong>({data})</strong></small>
                        </div>
                    </div>
                    <p>{resumo}</p>
                </div>

                <Link href={btDestino} className={style.btActionBlog}>saiba mais</Link>
            </div>
        </div>
    )
}

export function Turismo({ image, btDestino }) {

    return (

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

    )
}