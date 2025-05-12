'use client'
import Link from 'next/link'
import style from './exchanges.module.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";

export default function Exchanges() {
    const searchParams = useSearchParams()
    const exchanges = searchParams.get('exchange')
    const [exchange, setExchange] = useState('lemoncash')
    const [lastUpdated, setLastUpdated] = useState('')

    useEffect(() => {
        if (exchanges === 'bitsoalpha') {
            setExchange('bitsoalpha')
        } else {
            setExchange('lemoncash')
        }

        // Atualiza a data e hora da última atualização
        const now = new Date()
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        setLastUpdated(formattedTime)
    }, [exchanges])

    return (
        <section className={style.content}>
            {/* <div className={style.selectionE}>
                <h2>Selecione:</h2>
            </div>
            <div className={style.contentButton}>
                <Link
                    onClick={() => setExchange('lemoncash')}
                    className={exchange === 'lemoncash' ? style.active : style.desativo} 
                    href={"?exchange=lemoncash"}
                >
                    Lemon Cash
                </Link>
                <Link
                    onClick={() => setExchange('bitsoalpha')}
                    className={exchange === 'bitsoalpha' ? style.active : style.desativo} 
                    href={"?exchange=bitsoalpha"}
                >
                    Bitso
                </Link>
            </div> */}
            <p className={style.atualiza}>Última atualização: {lastUpdated}</p>
        </section>
    )
}
