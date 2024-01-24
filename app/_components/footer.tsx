import style from './footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={style.footer}>
            <p>Criador por: <strong><Link href={"https://www.linkedin.com/in/emerson-pereira-34aa8a150/"}>Emerson Pereira</Link></strong></p>
        </footer>
    )
}