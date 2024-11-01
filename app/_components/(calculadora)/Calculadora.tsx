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
            const res = await fetch('https://criptoya.com/api/binancep2p/USDT/BRL/0.1');
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
            <h2>Entenda seu cambio em pesos:</h2>
            <div className={style.contentCalculadoras}>
                <form className={style.contentInput}>
                    <div>
                        <label>
                            Reais
                            <img src="/img/icon/logoIcon.svg"
                                width={14}
                                height={14}
                            />
                            Pesos:
                        </label>
                        <div className={style.cal}>

                            <input
                                
                                onChange={handleChangeReais}
                            />
                            <small>R$</small>
                        </div>
                    </div>
                    <p className={style.valores}>Convertido:
                    <span>$
                    {resultadoReais.toLocaleString('pt-BR')}</span>
                    </p>
                </form>
                <form className={style.contentInput}>
                    <div>
                        <label>
                            Pesos
                            <img src="/img/icon/logoIcon.svg"
                                width={14}
                                height={14}
                            />
                            Reais:
                        </label>
                        <div className={style.cal}>

                            <input
                                
                                onChange={handleChangePesos}
                            />
                            <small>$</small>
                        </div>
                    </div>
                    <p className={style.valores}>Convertido:
                    <span>R$
                    {resultadoPesos.toLocaleString('pt-BR')}</span>
                    </p>
                </form>
            </div>
        </section>
    );
}
