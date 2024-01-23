'use client'

import { useEffect, useState } from "react"

export default function Api() {

  const [pesoDolar, setPesoDolar] = useState([])
  const [realDolar, setRealDolar] = useState([])

    useEffect(() => {
        const PESO_DOLAR_URL = 'https://criptoya.com/api/lemoncash/usdt/ars/0.1'
        fetch(PESO_DOLAR_URL)
        .then((pesoLemon) => {
            return pesoLemon.json()
        })
        .then((resposta) => {
            
            setPesoDolar(resposta)
        })
    }, [])

    useEffect(() => {
      const REAL_DOLAR_URL = 'https://criptoya.com/api/binance/usdt/brl/0.1'
      fetch(REAL_DOLAR_URL)
      .then((realBinance) => {
          return realBinance.json()
      })
      .then((resposta) => {
          
          setRealDolar(resposta)
      })
  }, [])

  return(
    <article>
      <ul>
        <li>${pesoDolar.totalBid }</li>
        <li>R${realDolar.totalBid}</li>

        <li>$ {Math.round(pesoDolar.totalBid / realDolar.totalBid)}</li>
      </ul>
    </article>
  )
}