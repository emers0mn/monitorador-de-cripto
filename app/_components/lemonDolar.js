import style from './lemonDolar.module.css'

async function getDolar(){
  const res = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

async function getRealDolar(){
  const res = await fetch('https://criptoya.com/api/binance/usdt/brl/0.1', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}


async function getDolarBlue(){
  const res = await fetch('https://dolarapi.com/v1/dolares/blue', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

/*Dólares*/

export async function DolarBlue(){

  const dolar = await getDolarBlue()
  return(
    <>
    <p className={style.dolar}><span className={style.cifra}>$</span>{Math.ceil(dolar.venta).toLocaleString('pt-BR')}</p>
    </>
  )
}

export async function LemonDolar(){
  const dolar = await getDolar()
  return(
    <>
    <p className={style.dolar}><span className={style.cifra}>$</span>{Math.ceil(dolar.totalBid).toLocaleString('pt-BR')}</p>
    </>
  )
}

/*Reais para pesos*/

export async function ReaisPeso1(){
  const dolar = await getDolar()
  const realDolar = await getRealDolar()

  const resultado = Math.ceil(dolar.totalBid / realDolar.totalBid)
  return(
    <>
    <p className={style.realPeso}><span className={style.cifra1}>$</span>{resultado}</p>
    </>
  )
}

export async function ReaisPeso2(){
  const dolar = await getDolar()
  const realDolar = await getRealDolar()

  const resultado = Math.ceil(dolar.totalAsk / realDolar.totalAsk)
  return(
    <>
    <p className={style.realPeso}><span className={style.cifra1}>$</span>{resultado}</p>
    </>
  )
}

export async function ReaisPesoFinal(a){
  const dolar = await getDolar()
  const realDolar = await getRealDolar()

  const resultado = Math.ceil(dolar.totalBid / realDolar.totalBid)
  return(resultado * a)
}