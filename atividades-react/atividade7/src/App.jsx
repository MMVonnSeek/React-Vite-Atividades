import {useState} from "react";
import Tela from "./components/Tela"; 

function App() {
  const [tema, setTema] = useState("claro");

  function alterarTema() {
    setTema(tema === "claro" ? "escuro" : "claro");
  }
    return(
      <Tela tema={tema}>
        <button onClick={alterarTema} 
        style={{
          marginTop: "10px",
          padding: "20px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",}}>Alterar Tema</button>
      </Tela>
    );
}
export default App;