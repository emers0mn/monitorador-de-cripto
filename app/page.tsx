import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import LemonDolar from './_components/lemonDolar';

export default function Home() {
  return (
    <main className={styles.content}>
      
          <LemonDolar />
      
      <div className={styles.valoresContent}>
        <div className={styles.valores}>
          <div>
            <div className={styles.valoresFinais}>
              <h2 className={styles.title2}>Dólar Blue</h2>
              <strong>
              <LemonDolar />
              </strong>
            </div>

          </div>
          <div className={styles.divisor}></div>
          <div className={styles.valoresFinais}>
            <h2>Dólar Cripto</h2>
            <LemonDolar />
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
                    alt='Reais para pesos direto'
                  />
                  <h2 className={styles.title2}>Pesos</h2>
                </div>
                <strong>
                <LemonDolar />
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
                  alt='Reais para pesos P2P'
                />
                <h2 className={styles.title2}>Pesos</h2>
              </div>
              <LemonDolar />
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
