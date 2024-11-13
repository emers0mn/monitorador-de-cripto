import Link from 'next/link'
import style from '../BlogHome.module.css'
import Image from 'next/image'


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

                <div className={style.text}>
                    <div>
                        <h3>{titulo}</h3>
                        <div>
                            <small>Autor: <strong>{autor}</strong></small>
                            <small>Postagem: <strong>({data})</strong></small>
                        </div>
                    </div>
                    <p>{resumo}</p>
                    <div className={style.contentBt}>
                        <Link href={btDestino} className={style.btActionBlog}>saiba mais</Link>
                        
                        <Link href={`https://api.whatsapp.com/send?text=https://monitorador-de-cripto-lpk7.vercel.app${btDestino}`}>
                            <img
                                src='/img/blogHome/compartilhar(1).png'
                                width={20}
                                height={20}
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