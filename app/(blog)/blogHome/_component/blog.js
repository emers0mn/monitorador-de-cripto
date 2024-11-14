import Link from 'next/link'
import style from '../BlogHome.module.css'
import Image from 'next/image'


export function Blog({ image, titulo, tema, data, resumo, btDestino }) {
    
    return (
        <div className={style.ContentConteudoHome}>

            <div className={style.ContentConteudo}>

                <div className={style.contentImagem}>
                    <div className={style.detalhe}></div>
                    <Link href={`/blog/${btDestino}`}>
                        <img
                            src={`pesos.imgix.net${image}`}
                            width={305}
                            height={265}
                            alt='imagem aqui viu'

                        />
                    </Link>
                    <small>tema: <strong>{tema}</strong></small>
                </div>

                <div className={style.text}>
                    <div>
                        <Link href={`/blog/${btDestino}`}>
                            <h2>{titulo}</h2>
                        </Link>
                        <div className={style.ContentTextSmall}>

                            <small>Postagem: <strong>({data})</strong></small>
                        </div>
                    </div>
                    <p>{resumo}</p>
                    <div className={style.contentBt}>
                        <Link href={`/blog/${btDestino}`} className={style.btActionBlog}>saiba mais</Link>

                        <Link href={`https://api.whatsapp.com/send?text=https://monitorador-de-cripto-lpk7.vercel.app${btDestino}`}>
                            <img
                                src='/img/blogHome/share.svg'
                                width={25}
                                height={25}
                                alt='Compartelhe essa noticia'
                            />

                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export function Turismo({ image, btDestino }) {

    return (
        <div className={style.ContentConteudoHome}>
            <div className={style.ContentConteudo}>
                <img
                    src={`/img/blogHome/${image}.png`}
                    width={305}
                    height={265}
                    alt='imagem aqui viu'
                />
            </div>
        </div>

    )
}