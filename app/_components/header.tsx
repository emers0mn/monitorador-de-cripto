import Image from "next/image";
import style from "./header.module.css"
import Link from "next/link";

const Header = () => {
    return ( 
        <>
        <header className={style.cabecalho}>
        <Link href={"/"}>
          <Image
          src={"/img/icon/logo.svg"}
          width={135}
          height={50}
          quality={75}
          alt="Logo"
          />
        </Link>
        <p className={style.frase}>entenda seu câmbio em pesos argentinos</p>
      </header>
        </>
     );
}
 
export default Header;