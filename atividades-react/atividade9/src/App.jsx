import { useState } from "react";
import "./App.css";
function App() {
  const [curtido, setCurtido] = useState(false);
  const [likes, setLikes] = useState(0);
  function alternarCurtida() {
    if (curtido) {
      setCurtido(false);
      setLikes(likes - 1);
    } else {
      setCurtido(true);
      setLikes(likes + 1);
    }
  }
  return (
    <div className="container">
            <h2>Simulador de Like</h2>
            <img src="https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="paisagem" width="100" className='foto'/>
            <p>Curta minha foto</p>
            <button
        onClick={alternarCurtida}
        className={`botao-curtir ${curtido ? "curtido" : ""}`}>
        {curtido ? "❤️ Curtido" : "🤍 Curtir"}
      </button>
      <p>{likes} curtidas</p>
    </div>
  );
}
export default App;