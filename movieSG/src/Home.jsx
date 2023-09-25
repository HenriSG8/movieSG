import Navbar from './Navbar';
import '../src/css/Home.css';

export default function Home() {
    return (
        <div>
            <header>
                {/* Adicione o conteúdo que você deseja exibir no cabeçalho aqui */}
                <h1>Meu Cabeçalho</h1>
            </header>
            <Navbar />
        </div>
    );
}

