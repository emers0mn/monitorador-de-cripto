'use client';

import { useState, useEffect } from "react";
import style from './calculadora.module.css';
import Image from "next/image";

type ApiResposta = {
    totalBid: number;
};

export default function Calculadora() {

    const [peso, setPeso] = useState<ApiResposta | null>(null);
    const [reais, setReais] = useState<ApiResposta | null>(null);
    const [valor, setValor] = useState<number>(0);
    const [valorPesos, setValorPesos] = useState<number>(0);
    const [isIcon1, setIsIcon1] = useState("Off");
    const [isIcon2, setIsIcon2] = useState("Off")

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
            setIsIcon1("Active")
        } else {
            setValor(0);
            setIsIcon1("Off")
        }
    };

    const handleChangePesos = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(',', '.');
        const numberValue = parseFloat(value);
        if (!isNaN(numberValue)) {
            setValorPesos(numberValue);
            setIsIcon2("Active")
        } else {
            setValorPesos(0);
            setIsIcon2("Off")
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
                            <img
                                src={`/img/icon/logoIcon${isIcon1}.svg`}
                                width={18}
                                height={18}
                                alt="Logo-Icone"
                            />
                            Pesos:
                        </label>
                        <div className={style.cal}>

                            <input
                                type="number"
                                placeholder="0,00"
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
                    <div className={style.contentForms}>
                        <label>
                            Pesos
                            <img
                                src={`/img/icon/logoIcon${isIcon2}.svg`}
                                width={18}
                                height={18}
                                alt="Logo-Icone"
                            />
                            Reais:
                        </label>
                        <div className={style.cal}>

                            <input
                                type="number"
                                placeholder="0,00"
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
