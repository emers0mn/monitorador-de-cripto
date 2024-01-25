import style from "./dicas.module.css"

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
            {dados.map((dica) => (
                <div key={dica.id}>

                    <h3>{dica.title}</h3>
                    <p>{dica.conteudo}</p>

                </div>
            ))}
        </main>
    )
}