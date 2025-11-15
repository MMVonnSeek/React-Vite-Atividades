import React, {useState} from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");

  const handleChange = (event) => {
    setNome(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome enviado: ${nome}`);
  };

  return (
    <div className="container">
      <h2>Formulário Simples</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={handleChange} placeholder="Digite seu nome" className="input"/>
      <button type="submit" className="botao">Enviar</button>
      </form>
    </div>
  );
}
export default App;