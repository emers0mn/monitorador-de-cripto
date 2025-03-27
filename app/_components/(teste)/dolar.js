'use client';
import { useCriptoStore } from "../../store/useCriptoStore";
import PegarDados from "../../api/services/pegarDados";
import { useEffect, useState } from "react";
export default function TesteDeDolar() {

    const {dolarBlue} = useCriptoStore();
    const [dolar, setDolar] = useState('Carregando...');
    const { pegarDolarBlue } = PegarDados();

    useEffect(() => {
        pegarDolarBlue();
    }, []); 

    useEffect(() => {
        if (dolarBlue !== null) {
            setDolar(dolarBlue);
        }
    }, [dolarBlue]);

 return (
   <div>
        <p>{dolar}</p>
   </div>
 );
}