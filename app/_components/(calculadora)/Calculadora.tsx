'use client';

import { useState, useEffect } from "react";
import style from './calculadora.module.css';

type ApiResposta = {
    totalBid: number;
};

export default function Calculadora() {

    const [peso, setPeso] = useState<ApiResposta | null>(null);
    const [reais, setReais] = useState<ApiResposta | null>(null);
    const [valor, setValor] = useState<number>(0);
    const [valorPesos, setValorPesos] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1');
            const resposta = await res.json();
            setPeso(resposta);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://criptoya.com/api/binance/usdt/brl/0.1');
            const resposta = await res.json();
            setReais(resposta);
        };

        fetchData();
    }, []);

    const handleChangeReais = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(',', '.');
        const numberValue = parseFloat(value);
        if (!isNaN(numberValue)) {
            setValor(numberValue);
        } else {
            setValor(0);
        }
    };

    const handleChangePesos = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(',', '.');
        const numberValue = parseFloat(value);
        if (!isNaN(numberValue)) {
            setValorPesos(numberValue);
        } else {
            setValorPesos(0);
        }
    };

    const resultadoReais = peso && reais ? valor * (Math.ceil(peso.totalBid / reais.totalBid)) : 0;
    const resultadoPesos = peso && reais ? valorPesos / (Math.ceil(peso.totalBid / reais.totalBid)) : 0;

    return (
        <section className={style.content}>
            <h2>Calculadora:</h2>
            <div className={style.contentCalculadoras}>
                <form className={style.contentInput}>
                    <label>Reais:</label>
                    <div className={style.cal}>
                        <small>R$</small>
                        <input
                            placeholder="Reais para pesos..."
                            onChange={handleChangeReais}
                        />
                    </div>
                    <strong>Resultado: ${resultadoReais.toLocaleString('pt-BR')}</strong>
                </form>
                <form className={style.contentInput}>
                    <label>Pesos:</label>
                    <div className={style.cal}>
                        <small>$</small>
                        <input
                            placeholder="Pesos para reais..."
                            onChange={handleChangePesos}
                        />
                    </div>
                    <strong>Resultado: R${resultadoPesos.toLocaleString('pt-BR')}</strong>
                </form>
            </div>
        </section>
    );
}
