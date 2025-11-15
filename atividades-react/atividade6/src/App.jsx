import Produto from "./components/Produto";

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h2>Lista de Produtos</h2>
      <Produto
      nome="Mouse"
      preco="20,00"
      descricao="Mouse sem fio"
      />
      <Produto
      nome="Teclado"
      preco="45,00"
      descricao="Teclado Gamer"
      />
      <Produto
      nome="Fone"
      preco="15,00"
      descricao="Som estéreo"
      />
    </div>
  );
}
export default App;