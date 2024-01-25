'use client';

import { useState } from "react";
import { ReaisPesoFinal } from "../lemonDolar";

export default function Calculadora() {

    
    
    const [reais, setReais] = useState(0);
    const resultado = ReaisPesoFinal(reais)

    function handleInputChange(event) {
        setReais(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Coloque aqui a lógica que você quer executar quando o formulário for enviado
    }

    return (
        <section>
            <h2>Calculadora:</h2>
            <form onSubmit={handleSubmit}>
                <select id="moedaParaCalular">
                    <option value="direto">direto</option>
                    <option value="p2p">p2p</option>
                </select>
                <input placeholder="Reais para pesos..." value={reais} onChange={handleInputChange}/>
                <button type="submit">Calcular</button>
            </form>

            <small>Resultado: $ {resultado}</small>
            
        </section>
    );
}
