import Link from 'next/link';
import style from './calculadora.module.css'

const Calculadora = () => {
    return ( 
        <main >
            <h1>Calculadora</h1>

            <Link href={"/"}>Voltar para home</Link>
        </main>
     );
}
 
export default Calculadora;