import style from './footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={style.footer}>
            <img
              src={"/img/logo.svg"}
              width={220}
              height={40}
              className={style.imgLogo}
              alt="Logo pesos argentinos Hoje"
            />
            <p>Criador por: <strong><Link href={"https://www.linkedin.com/in/emerson-pereira-34aa8a150/"}>Emerson Pereira</Link></strong></p>
        </footer>
    )
}