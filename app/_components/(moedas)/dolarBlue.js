'use client';

import { useEffect, useState } from 'react';
import style from '../(lemonDolar)/lemonDolar.module.css';
import useFetch from '../../useFetch'; // Ajuste o caminho conforme sua estrutura
import { useSearchParams } from "next/navigation";
import LoadingSpinner from '../spinner/LoadingSpinner'

// Componente DolarBlue
export function DolarBlue() {
  const { data: dolar, error, loading } = useFetch('https://dolarapi.com/v1/dolares/blue');

  if (loading) return <div><LoadingSpinner /></div>;
  if (error) return <p>Erro ao carregar dados: {error}</p>;


  return (
    <p className={style.dolar}>
      <span className={style.cifra}>$</span>
      {dolar ? Math.ceil(dolar.venta).toLocaleString('pt-BR') : 'Dados indisponíveis'}
    </p>
  );
}

// Componente Dolar Cripto -> Pesos
export function DolarCripto() {
    const searchParams = useSearchParams()
    const exchanges = searchParams.get('exchange')
    
    const [exchange, setExchange] = useState('lemoncash')
    
    useEffect(() => {
        if(exchanges == 'lemoncash') {
            setExchange('lemoncash')

        } else if(exchanges == 'bitsoalpha'){
            setExchange('bitsoalpha')
        }
    },[exchange, exchanges, setExchange])
    
    const { data: dolar, error, loading } = useFetch(`https://criptoya.com/api/${exchange}/usdt/ars/0.1`);
  
    if (loading) return <div><LoadingSpinner /></div>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;
    
  
    return (
      <p className={style.dolar}>
        <span className={style.cifra}>$</span>
        {dolar ? Math.ceil(dolar.totalBid).toLocaleString('pt-BR') : 'Dados indisponíveis'}
      </p>
    );
  }

  // Componente Reais -> Pesos (direto)
export function ReaisPeso1() {
    const searchParams = useSearchParams()
    const exchanges = searchParams.get('exchange')
    
    const [exchange, setExchange] = useState('lemoncash')
    
    useEffect(() => {
        if(exchanges == 'lemoncash') {
            setExchange('lemoncash')

        } else if(exchanges == 'bitsoalpha'){
            setExchange('bitsoalpha')
        }
    },[exchange, exchanges, setExchange])

    const { data: realDolar, error1, loading1 } = useFetch('https://criptoya.com/api/binancep2p/USDT/BRL/0.1');

    const { data: dolar, error, loading } = useFetch(`https://criptoya.com/api/${exchange}/usdt/ars/0.1`);

    const [resultado, setResultado] = useState()
    useEffect(() => {
        if(dolar && realDolar){
            setResultado(Math.ceil(dolar.totalBid / realDolar.totalBid))
        }
    },[dolar, realDolar, setResultado])
  
    if (loading) return <div><LoadingSpinner /></div>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;

    if (loading1) return <div><LoadingSpinner /></div>;
    if (error1) return <p>Erro ao carregar dados: {error1}</p>;
  
    return (
      <p className={style.dolar}>
        <span className={style.cifra}>$</span>
        {resultado}
      </p>
    );
  }

  export function ReaisPesoHeader() {
    const searchParams = useSearchParams()
    const exchanges = searchParams.get('exchange')
    
    const [exchange, setExchange] = useState('lemoncash')
    
    useEffect(() => {
        if(exchanges == 'lemoncash') {
            setExchange('lemoncash')

        } else if(exchanges == 'bitsoalpha'){
            setExchange('bitsoalpha')
        }
    },[exchange, exchanges, setExchange])

    const { data: realDolar, error1, loading1 } = useFetch('https://criptoya.com/api/binancep2p/USDT/BRL/0.1');

    const { data: dolar, error, loading } = useFetch(`https://criptoya.com/api/${exchange}/usdt/ars/0.1`);

    const [resultado, setResultado] = useState()
    useEffect(() => {
        if(dolar && realDolar){
            setResultado(Math.ceil(dolar.totalBid / realDolar.totalBid))
        }
    },[dolar, realDolar, setResultado])
  
    if (loading) return <div><LoadingSpinner /></div>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;

    if (loading1) return <div><LoadingSpinner /></div>;
    if (error1) return <p>Erro ao carregar dados: {error1}</p>;
  
    return (
      <small className={style.dolarHeader}>
        <span className={style.cifraHeader}>$</span>
        {resultado}
      </small>
    );
  }

  // Componente Reais -> Pesos (P2P)
export function ReaisPeso2() {
    const { data: realDolar, error1, loading1 } = useFetch('https://criptoya.com/api/binancep2p/USDT/BRL/0.1');
    
    const { data: dolar, error, loading } = useFetch('https://criptoya.com/api/lemoncashp2p/usdt/ars/0.1');

    const [resultado, setResultado] = useState(0)
    useEffect(() => {
        if(dolar && realDolar){
            setResultado(Math.ceil(dolar.totalBid / realDolar.totalBid))
        }
    },[dolar, realDolar, setResultado])
  
    if (loading) return <div><LoadingSpinner /></div>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;

    if (loading1) return <div><LoadingSpinner /></div>;
    if (error1) return <p>Erro ao carregar dados: {error1}</p>;
  
    return (
      <p className={style.dolar}>
        <span className={style.cifra}>$</span>
        {resultado}
      </p>
    );
  }

