'use client';

import { useState, useEffect } from "react";
import style from './calculadora.module.css'

type Repositorio = {
    totalBid: number;
};

export default function Calculadora() {

    const [peso, setPeso] = useState<Repositorio>({ totalBid: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1');
            const resposta = await res.json();
            console.log(resposta);
            setPeso(resposta);
        };

        fetchData();
    }, []);

    const [reais, setReais] = useState<Repositorio>({ totalBid: 0 });

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
        <section className={style.content}>
            <h2>Calculadora:</h2>
            <form className={style.contentInput}>
                <label>Reais:</label>
                <div className={style.cal}>
                    <small>R$</small>
                    <input placeholder="Reais para pesos..." value={valor} onChange={handleInputChange} />
                </div>
            </form>

            <strong>Resultado: ${(valor * (Math.ceil(peso.totalBid / reais.totalBid))).toLocaleString('pt-BR')}</strong>

        </section>
    );
}