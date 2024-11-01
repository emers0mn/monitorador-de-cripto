"use client"
import Link from "next/link"
import style from "./login.module.css"
import { useRouter } from 'next/navigation';
import { useState } from "react";
export default function PageCriarConta(){

    const router = useRouter();
    const [nome, setNome] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [alerta, setAlerta] = useState(true);

    const enviarDados = async (event: React.FormEvent) => {
        event.preventDefault();
        const url = 'https://localhost:44337/api/Acceso/Registar';

        const loginUsuario = {
            nome: nome,
            email: email,
            clave: senha,
        };

        try {
            const resposta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginUsuario),
            });

            if (!resposta.ok) {
                throw new Error('Erro na resposta da API');
            }

            const resultado = await resposta.json();
            console.log('Cadastro feitocom sucesso');
            

            // Armazena o token no localStorage
            if (resultado.isSuccess) {
                router.push('/login')
            } else{
                setAlerta(false)
            }
        } catch (erro) {
            console.error('Erro ao enviar dados:', erro);
            
        }
    };


    return(
        <div>
            <div className={style.title}>
                <h1>Criar conta</h1>
            </div>
            <section className={style.content}>
            
                <div className={style.contentLogin}>
                    <form className={style.contentForms}>
                        <div>
                            <div className={style.contentInput}>
                                <label>Nome:</label>
                                <input className={style.inputLogin} onChange={(e) => setNome(e.target.value)} placeholder="Escreva aqui"></input>
                            </div>
                            <div className={style.contentInput}>
                                <label>E-mail:</label>
                                <input className={style.inputLogin} onChange={(e) => setEmail(e.target.value)} placeholder="Escreva aqui"></input>
                            </div>
                            <div className={style.contentInput}>
                                <label>Senha:</label>
                                <input className={style.inputLogin} onChange={(e) => setSenha(e.target.value)} placeholder="Escreva aqui"></input>
                            </div>
                        </div>
                        <button type="button"  onClick={enviarDados} className={style.btEntrar}>Cadastrar</button>
                    </form>
                </div>
                <div className={style.contentCriarConta}>
                    <div className={style.criarConta}>
                        <p>Já tem uma conta</p>
                        <Link href={"/login"}>acesse aqui</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}