
import styles from './page.module.css'
import Calculadora from './_components/(calculadora)/Calculadora';
import { DolarBlue, DolarCripto, ReaisPeso1, ReaisPeso2 } from './_components/(moedas)/dolarBlue';
import BlogHome from './(blog)/blogHome/BlogHome'


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
                  <img
                    src={"./img/icon/logoIcon.svg"}
                    width={20}
                    height={20}
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
