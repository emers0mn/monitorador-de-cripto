import style from "./dicas.module.css"

type Dica = {
    id: string;
    title: string;
    conteudo: string;
  };

async function getDados() {
    const res = await fetch('https://emers0mn.github.io/Teste-conteudo/teste.json', {
        next: {
            revalidate: 30
        },
    })

    return res.json()
}


export default async function Dicas() {

    const dados = await getDados()

    return (
        <main className={style.content}>
            <h2>Dicas do Emerson</h2>
            {dados.map((dica: Dica) => (
                <div key={dica.id}>

                    <h2>{dica.title}</h2>
                    <p>{dica.conteudo}</p>

                </div>
            ))}
        </main>
    )
}