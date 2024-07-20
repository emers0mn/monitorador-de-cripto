'use client';

import style from '../(lemonDolar)/lemonDolar.module.css';
import useFetch from '../../useFetch'; // Ajuste o caminho conforme sua estrutura

// Componente Dolar Cripto
export default function DolarCripto() {
    const { data: dolar, error, loading } = useFetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1');
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;
    
  
    return (
      <p className={style.dolar}>
        <span className={style.cifra}>$</span>
        {Math.ceil(dolar.venta).toLocaleString('pt-BR')}
      </p>
    );
  }