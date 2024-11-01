import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
///import { DolarBlue, LemonDolar, ReaisPeso1, ReaisPeso2 } from './_components/(lemonDolar)/lemonDolar';
import Dicas from './_components/(dicas)/Dicas';
import Calculadora from './_components/(calculadora)/Calculadora';
import Exchanges from './_components/(selection)/exchange';
import { DolarBlue, DolarCripto, ReaisPeso1, ReaisPeso2 } from './_components/(moedas)/dolarBlue';

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
            <DolarCripto />
          </div>
        </div>

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
          {/* <div className={styles.divisor}></div>
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
            </div> */}

        </div>

      </div>


      {/* <Exchanges /> */}
      <Calculadora />
      {/* <h2>pc</h2> */}
      {/* Anúncios Desktop */}
      {/* <div className="ad-simulation ad-728x90">Anúncio 728x90</div>
      <div className="ad-simulation ad-300x250">Anúncio 300x250</div>
      <div className="ad-simulation ad-336x280">Anúncio 336x280</div>
      <div className="ad-simulation ad-160x600">Anúncio 160x600</div>
      <div className="ad-simulation ad-300x600">Anúncio 300x600</div>
      <div className="ad-simulation ad-970x250">Anúncio 970x250</div> */}

      {/*<h2>Mobile</h2> */}
      {/* Anúncios Mobile */}
      {/* <div className="ad-simulation ad-320x50">Anúncio 320x50</div>
      <div className="ad-simulation ad-320x100">Anúncio 320x100</div>
      <div className="ad-simulation ad-250x250">Anúncio 250x250</div> */}
      {/* <Dicas /> */}
    </main>
  )
}
