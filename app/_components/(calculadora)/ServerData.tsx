// components/ServerData.tsx
import { GetServerSideProps } from 'next';
import Calculadora from './Calculadora'; // Ajuste o caminho conforme necessário

export const getServerSideProps: GetServerSideProps = async () => {
  const pesoRes = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1');
  const peso = await pesoRes.json();

  const reaisRes = await fetch('https://criptoya.com/api/binance/usdt/brl/0.1');
  const reais = await reaisRes.json();

  return {
    props: {
      peso,
      reais
    }
  };
};

type ApiResposta = {
  totalBid: number;
};

type ServerDataProps = {
  peso: ApiResposta;
  reais: ApiResposta;
};


export default function ServerData({ peso, reais }: ServerDataProps) {
  return (
    <Calculadora peso={peso} reais={reais} />
  );
}
