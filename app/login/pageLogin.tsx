"use client"
import Link from "next/link"
import style from "./login.module.css"
import { use, useState } from "react";
import useTokenLogin from "../_components/store/useTokenLogin";
import { useRouter } from 'next/navigation';
export default function PageLogin() {


    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const { token, setToken } = useTokenLogin();
    const router = useRouter();
    const [typeSenha, setTypeSenha] = useState("password");
    const [eyes, setEyes] = useState("close");
    const [alerta, setAlerta] = useState(true);


    const enviarDados = async (event: React.FormEvent) => {
        event.preventDefault();
        const url = 'https://localhost:44337/api/Acceso/Login';

        const loginUsuario = {
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
            console.log('Dados enviados com sucesso:');
            

            // Armazena o token no localStorage
            if (resultado.isSuccess) {
                setToken(resultado.token);
                router.push('/produtos')
            } else{
                setAlerta(false)
            }
        } catch (erro) {
            console.error('Erro ao enviar dados:', erro);
            
        }
    };

    const handleEyes = (event: React.FormEvent) => {
        event.preventDefault();
        if (typeSenha == "password") {
            setTypeSenha("text")
            setEyes("open")
        } else if (typeSenha == "text") {
            setTypeSenha("password")
            setEyes("close")
        }
    }


    return (
        <div>
            <div className={style.title}>
                <h1>Login</h1>
            </div>
            <section className={style.content}>

                <div className={style.contentLogin}>
                    <form className={style.contentForms}>
                        <div>
                            <div className={style.contentInput}>
                                <label>Usuário ou E-mail:</label>
                                <input className={style.inputLogin} placeholder="Escreva aqui" onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className={style.contentSenha}>
                                <div className={style.contentInput}>
                                    <label>Senha:</label>
                                    <input className={style.inputLogin} type={typeSenha} placeholder="Escreva aqui" onChange={(e) => setSenha(e.target.value)}></input>
                                </div>
                                <button onClick={handleEyes}>
                                    <img
                                    src={`/img/icon/${eyes}-eyes.png`}
                                    width={20}
                                    height={20}
                                    />
                                </button>
                                <a href="https://api.whatsapp.com/send?phone=541131024913&text=Esqueci%20minha%20senha" target="_blank">Esqueci minha senha</a>
                            </div>
                        </div>
                        <button onClick={enviarDados} className={style.btEntrar}>Entrar</button>

                        <small hidden={alerta}>login ou senha errados</small>
                    </form>
                </div>
                <div className={style.contentCriarConta}>
                    <div className={style.criarConta}>
                        <p>Novo aqui?</p>
                        <Link href={"/criar-conta"}>Crie uma conta</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}