import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
///import { DolarBlue, LemonDolar, ReaisPeso1, ReaisPeso2 } from './_components/(lemonDolar)/lemonDolar';
import Dicas from './_components/(dicas)/Dicas';
import Calculadora from './_components/(calculadora)/Calculadora';
import Exchanges from './_components/(selection)/exchange';
import { DolarBlue, DolarCripto, ReaisPeso1, ReaisPeso2 } from './_components/(moedas)/dolarBlue';
import BlogHome from './(blog)/blogHome/BlogHome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const runtime = "edge";

export default function Home() {

  return (
    <main className={styles.content}>

      <div className={styles.valoresContent}>
        <div className={styles.valores}>
          <div className={styles.contentValores}>
            <div className={styles.valoresFinais}>
              <h2 className={styles.title2}>
                Dólar
                <div className={styles.contentMarca}>
                  <span className={styles.marca}>Blue</span>
                  <div className={styles.marcaDaMarca}></div>
                </div>
              </h2>

              <DolarBlue />

            </div>

          </div>
          <div className={styles.divisor}></div>
          <div className={styles.valoresFinais}>
            <h2 className={styles.title2}>
              Dólar
              <div className={styles.contentMarca}>
                <span className={styles.marca}>Cripto</span>
                <div className={styles.marcaDaMarca}></div>
              </div>
            </h2>
            
            <DolarCripto />
            {/* <DolarBlue /> */}
          </div>
        </div>

      </div>

      <div className={styles.valoresContent}>
        <div className={styles.valores}>
          <div className={styles.contentValores}>
            <div className={styles.valoresFinais}>

              <div className={styles.detalhe}>
                <div className={styles.valoresFinais1}>
                  <h2 className={styles.title2}>Reais</h2>
                  <Image
                    src={"./img/icon/logoIcon.svg"}
                    width={20}
                    height={20}
                    quality={75}
                    alt='Reais para pesos direto'
                    className={styles.imageCambio}
                  />
                  <h2 className={styles.title2}>Pesos</h2>
                </div>

              </div>

              {/* <DolarBlue /> */}
              <ReaisPeso1 />

            </div>

          </div>

        </div>

      </div>
      <Calculadora />

      <BlogHome />
    </main>
  )
}
