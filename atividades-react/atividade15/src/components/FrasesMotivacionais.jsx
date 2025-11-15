import { useState } from "react";
import "./FrasesMotivacionais.css";

function FrasesMotivacionais() {
    const frases = [
        "Primeira Frase",
        "Segunda Frase",
        "Terceira Frase"];
    
    const [indice, setIndice] = useState(0);

    function Proxima() {
        setIndice((prev) => (prev + 1)%
    frases.length);
    }

    return (
        <div className="frases-container">
            <div className="card-frase">
            <p>{frases[indice]}</p>   
            </div>
            <button onClick={Proxima}>Próxima Frase</button>
        </div>
    );
}
export default FrasesMotivacionais;