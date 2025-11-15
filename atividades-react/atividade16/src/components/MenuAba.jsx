import { useState } from "react";

function MenuAba() {
    const [abaAtual, setAbaAtual] = useState("Filmes");

    return(
        <div className="menu-aba-container">
            <div className="botoes">
                
                <button className={abaAtual === "Filmes" ? "ativo" : ""} onClick={() => setAbaAtual("Filmes")}>Filmes</button>

                <button className={abaAtual === "Séries" ? "ativo" : ""} onClick={() => setAbaAtual("Séries")}>Séries</button>

                <button className={abaAtual === "Minha Lista" ? "ativo" : ""} onClick={() => setAbaAtual("Minha Lista")}>Minha Lista</button>
            </div>
            <p className="texto-aba">Você está vendo: {abaAtual}</p>
        </div>
    );
}
export default MenuAba;