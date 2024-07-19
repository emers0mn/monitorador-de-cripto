import style from './lemonDolar.module.css';
import Params from './params'

async function getDolar(ex){
  const res = await fetch(`https://criptoya.com/api/${ex}/usdt/ars/0.1`, {
    next: {
      revalidate: 15
    }
  })

  return res.json()
}

async function getRealDolar(){
  const res = await fetch('https://criptoya.com/api/binance/usdt/brl/0.1', {
    next: {
      revalidate: 15
    }
  })

  return res.json()
}


async function getDolarBlue(){
  const res = await fetch('https://dolarapi.com/v1/dolares/blue', {
    next: {
      revalidate: 15
    }
  })

  return res.json()
}

/*Dólares*/

export async function DolarBlue(){

  const dolar = await getDolarBlue()
  return(
    <>
    <p className={style.dolar}>
      <span className={style.cifra}>$</span><span className={style.cifra}>$</span>
      {Math.ceil(dolar.venta).toLocaleString('pt-BR')}</p>
    </>
  )
}

export async function LemonDolar({ ex }){
  const dolar = await getDolar(ex)
  
  return(
    <>
    <p className={style.dolar}>
      <span className={style.cifra}>$</span><span className={style.cifra}>$</span>
      {Math.ceil(dolar.totalBid).toLocaleString('pt-BR')}</p>
    </>
  )
}

/*Reais para pesos*/

export async function ReaisPeso1({ ex }){
  const dolar = await getDolar(ex)
  const realDolar = await getRealDolar()

  const resultado = Math.ceil(dolar.totalBid / realDolar.totalBid)
  return(
    <>
    <p className={style.realPeso}><span className={style.cifra1}>$</span>{resultado}</p>
    </>
  )
}

export async function ReaisPeso2({ ex }){
  const dolar = await getDolar(ex)
  const realDolar = await getRealDolar()

  const resultado = Math.ceil(dolar.totalAsk / realDolar.totalAsk)
  return(
    <>
    <p className={style.realPeso}><span className={style.cifra1}>$</span>{resultado}</p>
    </>
  )
}

/*Reais para pesos*/