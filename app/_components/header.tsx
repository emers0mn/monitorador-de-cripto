'use client'
import { useState, useEffect } from "react";

import style from "./header.module.css"
import Link from "next/link";
import Menu from '../(layout)/menu'
import { ReaisPesoHeader } from "./(moedas)/dolarBlue";

const Header = () => {

  const [isMenu, setIsMenu] = useState(true);
  const [icon, setIcon] = useState("Open")
  const handleMenu = () => {
    setIsMenu(!isMenu)
    if (isMenu == false) {
      setIcon("Open")
    } else {
      setIcon("Close")
    }
  }

  //console.log(isMenu)

  return (
    <div>
      <div className={style.contentHead}>
        <section className={style.content}>
          <div className={style.conteinerHead}>
            <img
              src={"/img/logo.svg"}
              width={200}
              height={40}
              className={style.imgLogo}
              alt="Logo pesos argentinos Hoje"
            />:
            <small> 
            <ReaisPesoHeader />
            </small>
          </div>
          <button className={style.btMenu} onClick={handleMenu}>
            <img
              src={`/img/icon/menu${icon}.svg`}
              width={25}
              height={25}
              className={style.imgMenu}
              alt="Menu"
            />
          </button>
        </section>
      </div>

      {/* Menu */}
      <div className={!isMenu ? style.contentMenuOpen : style.contentMenuClose}>

        <div className={style.contentHead}>
          <section className={style.contentMenu}>
            <div className={style.conteiner}>
              <h2></h2>
            </div>
            <button className={style.btMenu} onClick={handleMenu}>
              <img
                src={`/img/icon/menu${icon}.svg`}
                width={25}
                height={25}
                className={style.imgMenu}
                alt="Menu"
              />
            </button>
          </section>

          <section>

            <div onClick={handleMenu}>
              <Menu />
            </div>
            <div className={style.contentContato}>
              <div className={style.divisor}></div>


            </div>

          </section>
        </div>

      </div>
    </div>

  )
}

export default Header;