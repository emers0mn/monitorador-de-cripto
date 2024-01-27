 'use client';

 import { useState, useEffect } from "react";

 type PesoType = {
    totalBid: number;
  };

 export default function Calculadora() {

    const [peso, setPeso] = useState<PesoType>({ totalBid: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1');
      const resposta = await res.json();
      console.log(resposta);
      setPeso(resposta);
    };

    fetchData();
  }, []);

  const [reais, setReais] = useState<PesoType>({ totalBid: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://criptoya.com/api/binance/usdt/brl/0.1');
      const resposta = await res.json();
      console.log(resposta);
      setReais(resposta);
    };

    fetchData();
  }, []);




     const [valor, setValor] = useState(0);

     function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValor(Number(event.target.value));
      }

     return (
         <section>
             <h2>Calculadora:</h2>
             <form>
                 <input placeholder="Reais para pesos..." value={valor} onChange={handleInputChange}/>
             </form>

             <small>Resultado: {(valor * (Math.ceil(peso.totalBid / reais.totalBid))).toLocaleString('pt-BR')}</small>
            
         </section>
     );
 }