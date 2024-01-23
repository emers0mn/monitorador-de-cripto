import Image from "next/image";
import style from "./header.module.css"

const Header = () => {
    return ( 
        <>
        <header className={style.cabecalho}>
        <Image
        src={"./img/icon/logo.svg"}
        width={135}
        height={50}
        quality={75}
        loading='lazy'
        />
        <p className={style.frase}>entenda seu câmbio em pesos argentinos</p>
      </header>
        </>
     );
}
 
export default Header;