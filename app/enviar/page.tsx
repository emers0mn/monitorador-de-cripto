'use client'
import { useState, useEffect } from "react";

export default function Enviar(){

    const [ nome, setNome ] = useState<string>();
    const [ cep, setCep ] = useState<string>();
    const [ whatsApp, setWhatsApp ] = useState<string>();
    const [ email, setEmail ] = useState<string>();

        const enviarDados = async (event: React.FormEvent) => {
            event.preventDefault();
            const url = 'https://localhost:44380/api/FomrsAPIHayps';

            const dados = {
              id : 0,
              name: nome,
              numberPhone: whatsApp,
              cep: cep,
              cpf: "000000000",
              age: 0,
              email: email
            };
          
            try {
              const resposta = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', 
                },
                body: JSON.stringify(dados),
              });
          
              if (!resposta.ok) {
                throw new Error('Erro na resposta da API');
              }
          
              const resultado = await resposta.json(); 
              console.log('Dados enviados com sucesso:', resultado);
            } catch (erro) {
              console.error('Erro ao enviar dados:', erro);
            }
          };

    return(
        <section>
            <form>
                <div>
                    <label>Nome completo:</label>
                    <input onChange={(e) => setNome(e.target.value) } placeholder="escreva aqui"/>
                </div>
                <br/>
                <div>
                    <label>CEP:</label>
                    <input onChange={(e) => setCep(e.target.value) } placeholder="escreva aqui"/>
                </div>
                <br/>
                <div>
                    <label>WhatsApp:</label>
                    <input onChange={(e) => setWhatsApp(e.target.value) } placeholder="escreva aqui"/>
                </div>
                <br/>
                <div>
                    <label>e-mail:</label>
                    <input onChange={(e) => setEmail(e.target.value) } placeholder="escreva aqui"/>
                </div>
                <br/>
                <div>
                    <button type="submit" onClick={enviarDados}>Enviar</button>
                </div>
            </form>
        </section>
    )
}