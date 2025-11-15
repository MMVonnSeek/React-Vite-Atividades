import React, {useState} from "react";

function PainelJogo() {
    const [Jogador1, setJogador1] = useState(0);
    const [Jogador2, setJogador2] = useState(0);
    const PontoJ1 = () => setJogador1(Jogador1 +1);
    const PontoJ2 = () => setJogador2(Jogador2 +1);
    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Painel de Pontuação</h2>
            <p>Jogador 1: {Jogador1} pontos</p>
            <button onClick={PontoJ1}>+ 1 Jogador 1</button>
            <p>Jogador 2: {Jogador2} pontos</p>
            <button onClick={PontoJ2}>+ 1 Jogador 2</button>
        </div>
    );
}
export default PainelJogo;