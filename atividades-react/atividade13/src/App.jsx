import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return(
    <div className="cards-container">
      <Header/>

      <div>
        <Card 
        titulo="Usuarios"
        numero="120"
        descricao="Total de usuarios cadastrados"
        />

        <Card 
        titulo="Vendas"
        numero="52"
        descricao="Vendas realizadas"
        />
      </div>
      <Footer/>
    </div>
  );
}
export default App;