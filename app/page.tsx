'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Api from './_components/lemonDolar';



export default function Home() {

  const [pesoDolar, setPesoDolar] = useState([])
  const [realDolar, setRealDolar] = useState([])
  const [blue, setBlue] = useState([])

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

  useEffect(() => {
    const DOLAR_BLUE_URL = 'https://dolarapi.com/v1/dolares/blue'
    fetch(DOLAR_BLUE_URL)
    .then((blue) => {
        return blue.json()
    })
    .then((resposta) => {
        
        setBlue(resposta)
    })
}, [])

  const cotacaoCard = Math.round(pesoDolar.totalBid / realDolar.totalBid )

  const cotacaoP2P = Math.round(pesoDolar.totalAsk / realDolar.totalAsk )
    
    


  return (
    <main className={styles.content}>
      
          
      
      <div className={styles.valoresContent}>
        <div className={styles.valores}>
          <div>
            <div className={styles.valoresFinais}>
              <h2 className={styles.title2}>Dólar Blue</h2>
              <strong>
                <p>${blue.venta}</p>
              </strong>
            </div>

          </div>
          <div className={styles.divisor}></div>
          <div className={styles.valoresFinais}>
            <h2>Dólar Cripto</h2>
            <p>${Math.round(pesoDolar.totalBid)}</p>
          </div>
        </div>
        <p className={styles.atualiza}>Última atualização:</p>
      </div>


      
        <div className={styles.valoresContent}>
          <div className={styles.valores}>
            <div>
              <div className={styles.valoresFinais}>
                <div className={styles.valoresFinais1}>
                  <h2 className={styles.title2}>Reais</h2>
                  <Image
                    src={"./img/icon/favicon_vai.svg"}
                    width={9.17}
                    height={8.31}
                    quality={75}
                    loading='lazy'
                  />
                  <h2 className={styles.title2}>Pesos</h2>
                </div>
                <strong>
                  <p>${cotacaoCard}</p>
                </strong>
              </div>

            </div>
            <div className={styles.divisor}></div>
            <div className={styles.valoresFinais}>
              <div className={styles.valoresFinais1}>
                <h2 className={styles.title2}>Reais</h2>
                <Image
                  src={"./img/icon/favicon_vai.svg"}
                  width={9.17}
                  height={8.31}
                  quality={75}
                  loading='lazy'
                />
                <h2 className={styles.title2}>Pesos</h2>
              </div>
              <p>${cotacaoP2P}</p>
            </div>
          </div>
          <p className={styles.atualiza}>Última atualização:</p>
        </div>



      <div>
        <h2>Calculadora de Cambio:</h2>
        <Link href={"/calculadora"}>Voltar para calculadora</Link>
      </div>


    </main>
  )
}
