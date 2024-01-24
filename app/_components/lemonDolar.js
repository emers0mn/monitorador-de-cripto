async function getDolar(){
  const res = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

export default async function LemonDolar(){
  const lemonUSDT = await getDolar()
  

  return(
    <>
    <p>${Math.ceil(lemonUSDT.totalBid)}</p>
    </>
  )
}