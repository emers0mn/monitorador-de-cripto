import Image from "next/image";
import style from "./header.module.css"
import Link from "next/link";

export default function Menu(){
    return ( 
        
        <div>
            <header className={style.content}>
            <ul>
              <li>
              <Link href={"/"}>
                home
              </Link>
              </li>
              <li>
              <Link href={"/blog"}>
              blog
              </Link>
              </li>
              <li>
              <Link href={"/sobre"}>
              sobre
              </Link>
              </li>
              <li>
              <Link href={"/login"}>
              login
              </Link>
              </li>
            </ul>
            
            </header>
            <div>
            <div className={style.contentContanto}>
                <div className={style.divisor}></div>
                <div className={style.conteinerContanto}>
                    <div className={style.icon}>
                        <Link href={"https://github.com/emers0mn"} className={style.icon}>
                            <Image
                              src="/img/icon/github.png"
                              width={45}
                              height={45}
                              className={style.imgMenu}
                              alt="Menu"
                            />
                            <p>Github</p>
                        </Link>
                    </div>
                    <div className={style.icon}>
                        <Link href={"https://github.com/emers0mn"} className={style.icon}>
                            <Image
                              src="/img/icon/whatsapp.png"
                              width={45}
                              height={45}
                              className={style.imgMenu}
                              alt="Menu"
                            />
                            <p>whatsapp</p>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
        </div>
        
     );

}