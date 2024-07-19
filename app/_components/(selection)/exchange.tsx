'use client'
import Link from 'next/link'
import style from './exchanges.module.css'
import { useState } from 'react'


export default function Exchanges() {

    const [lemon, setLemon] = useState(true)
    const [bitso, setBitso] = useState(false)

    return (
        <section className={style.content}>
            <div className={style.selectionE}>
                <h2>Selecione:</h2>
            </div>
            <div className={style.contentButton}>
                <Link
                    onClick={(() => {
                        setLemon(true)
                        setBitso(false)
                    })}
                    className={lemon ? style.active : style.desativo} href={"?exchange=lemoncash"} >Lemon Cash</Link>
                <Link
                    onClick={(() => {
                        setLemon(false)
                        setBitso(true)
                    })}
                    className={bitso ? style.active : style.desativo} href={"?exchange=bitsoalpha"}  >Bitso</Link>

            </div>
        </section>
    )
}