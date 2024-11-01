import style from "./dicas.module.css"

type DadosApi = {
    id: number;
    name: string;
    email: string;
  };

async function getDados() {
    const url = "http://localhost:85/api/FomrsAPIHayps"
    const res = await fetch(url, {
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
            {dados.map((dado: DadosApi) => (
                <div key={dado.id}>

                    <h2>{dado.name}</h2>
                    <p>{dado.email}</p>

                </div>
            ))}
        </main>
    )
}