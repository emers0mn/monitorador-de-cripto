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
    <p>${Math.ceil(dolar.venta)}</p>
    </>
  )
}

export async function LemonDolar(){
  const dolar = await getDolar()
  return(
    <>
    <p>${Math.ceil(dolar.totalBid)}</p>
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
    <p>${resultado}</p>
    </>
  )
}

export async function ReaisPeso2(){
  const dolar = await getDolar()
  const realDolar = await getRealDolar()

  const resultado = Math.ceil(dolar.totalAsk / realDolar.totalAsk)
  return(
    <>
    <p>${resultado}</p>
    </>
  )
}