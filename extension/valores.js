async function getDolar() {
    const dolarCripto = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1')
    const cripto = await dolarCripto.json()

    const dolarReal = await fetch('https://criptoya.com/api/binancep2p/USDT/BRL/0.1')
    const real = await dolarReal.json()


    return Math.ceil(cripto.totalBid / real.totalBid)
}

getDolar().then(valor => {
    // Seleciona o elemento
    let elemento = document.getElementById('valores')

    // Define o innerHTML do elemento
    elemento.innerHTML = `$${JSON.stringify(valor)}`
}).catch(error => {
    console.error('Erro:', error)
})
