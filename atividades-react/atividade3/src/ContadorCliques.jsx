import React, {useState} from "react";

function ContadorCliques() {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + 1)
    };

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Contador de Cliques</h2>
            <p>Você clicou {contador} vezes</p>
            <button onClick={aumentarContador}>Clique Aqui</button>
        </div>
    );
}
export default ContadorCliques;