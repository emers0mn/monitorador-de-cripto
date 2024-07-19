import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { DolarBlue, LemonDolar, ReaisPeso1, ReaisPeso2 } from './_components/(lemonDolar)/lemonDolar';
import Dicas from './_components/(dicas)/Dicas';
import Calculadora from './_components/(calculadora)/Calculadora';
import Exchanges from './_components/(selection)/exchange';

export default function Home() {

  return (
    <main className={styles.content}>
      
      <div className={styles.valoresContent}>
        <div className={styles.valores}>
          <div>
            <div className={styles.valoresFinais}>
              <h2 className={styles.title2}>Dólar Blue</h2>
              
              <DolarBlue />
              
            </div>

          </div>
          <div className={styles.divisor}></div>
          <div className={styles.valoresFinais}>
            <h2 className={styles.title2}>Dólar Cripto</h2>
            <LemonDolar
              
            />
          </div>
        </div>
        <p className={styles.atualiza}>Última atualização:</p>
      </div>
      
        <div className={styles.valoresContent}>
          <div className={styles.valores}>
            <div>
              <div className={styles.valoresFinais}>

                <div className={styles.detalhe}>
                  <div className={styles.valoresFinais1}>
                    <h2 className={styles.title2}>Reais</h2>
                    <Image
                      src={"./img/icon/favicon_vai.svg"}
                      width={12}
                      height={8.31}
                      quality={75}
                      alt='Reais para pesos direto'
                    />
                    <h2 className={styles.title2}>Pesos</h2>
                  </div>
                  <h3>(<strong>direto</strong>)</h3>
                </div>
                
                
                <ReaisPeso1 />
                
              </div>

            </div>
            <div className={styles.divisor}></div>
            <div className={styles.valoresFinais}>
              
              <div className={styles.detalhe}>
                <div className={styles.valoresFinais1}>
                  <h2 className={styles.title2}>Reais</h2>
                  <Image
                    src={"./img/icon/favicon_vai.svg"}
                    width={12}
                    height={8.31}
                    quality={75}
                    alt='Reais para pesos P2P'
                  />
                  <h2 className={styles.title2}>Pesos</h2>
                </div>
                <h3>(<strong>p2p</strong>)</h3>
              </div>
              <ReaisPeso2 />
            </div>

          </div>
          <p className={styles.atualiza}>Última atualização:</p>
        </div>

        
          <Exchanges />
          <Calculadora />
          <Dicas />
    </main>
  )
}
