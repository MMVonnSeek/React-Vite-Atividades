import React, { useState } from "react";
import PainelAluno from "./PainelAluno";

function App() {
  const [pontos, setPontos] = useState(0);

  const aumentarPontos = () => {
    setPontos((prev) => prev + 1);
  };

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Sistema de Pontuação</h1>
      <PainelAluno nome="Max" curso="Front End" pontos={pontos}/>

      <PainelAluno nome="Thaís" curso="React" pontos={pontos}/>

      <button onClick={aumentarPontos}>Adicionar</button>
    </div>
  );
}
export default App;