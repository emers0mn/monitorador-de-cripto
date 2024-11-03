"use client";
import { useEffect, useState } from "react";
import useTokenLogin from "../_components/store/useTokenLogin";
import LoadingSpinner from "../_components/spinner/LoadingSpinner";
import { useRouter } from "next/navigation";

export default function Produtos() {
    const router = useRouter();
    const { token } = useTokenLogin();
    const [produtos, setProdutos] = useState(null);

    useEffect(() => {
        const buscarProdutos = async () => {
            if (!token){
                router.push("/login")
            }; // Verifica se o token está disponível antes de prosseguir

            const url = 'http://localhost:85/api/Produtos/Lista';
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            try {
                const resposta = await fetch(url, {
                    method: 'GET',
                    headers: myHeaders,
                });

                if (!resposta.ok) {
                    throw new Error('Erro na resposta da API');
                }

                const data = await resposta.json();
                setProdutos(data.value); // Define `data.value` diretamente como a lista de produtos
            } catch (erro) {
                console.error('Erro ao buscar produtos:', erro);
            }
        };

        buscarProdutos();
    }, [token]);

    return (
        <div>
            {produtos ? (
                produtos.map((produto) => (
                    <div key={produto.idUsuario}>
                        <p>Nome: {produto.nome}</p>
                        <p>Marca: {produto.marca}</p>
                        <p>Preço: R${produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                ))
            ) : (
                <LoadingSpinner/>
            )}
        </div>
    );
}
