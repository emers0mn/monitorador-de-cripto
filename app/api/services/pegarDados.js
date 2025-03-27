import { useCriptoStore } from "../../store/useCriptoStore";
export const runtime = 'edge';

export default function PegarDados() {

    const { setDolarBlue, setDolarCripto, setDolarReal } = useCriptoStore();

    async function pegar(url) {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await res.json();
            return result.totalBid;
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    }

    function pegarDolarCripto() {
        setDolarCripto(pegar("https://criptoya.com/api/lemoncash/usdt/ars/0.1"));
    }

    function pegarDolarReal() {
        setDolar(pegar("https://criptoya.com/api/lemoncash/usdt/ars/0.1"));
    }

    function pegarDolarBlue() {
        setDolarBlue(pegar("https://criptoya.com/api/lemoncash/usdt/ars/0.1"))
    }


    return {
        pegarDolarCripto,
        pegarDolarReal,
        pegarDolarBlue
    }
}

// useEffect(() => {
//     const fetchData = async () => {
//         const res = await fetch('https://criptoya.com/api/lemoncash/usdt/ars/0.1');
//         const resposta = await res.json();
//         setPeso(resposta);
//     };

//     fetchData();
// }, []);