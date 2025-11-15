import { useState } from "react";
import ProdutoLista from "./components/ProdutoLista";

function App() {
    const [produtoSelecionado, setprodutoSelecionado] = useState(null);

    const produtos = [
        {
            nome: "Produto 1",
            preco: 49.90,
            imagem: ""
        },
    ];
    return (
        <div className="container">
            <h1>Catálogo de Produtos</h1>
            <ProdutoLista produtos={produtos} onSelecionar={setprodutoSelecionado}/>

                {produtoSelecionado && (
            <div className="prod-selecionado">
              <h2>Produto Selecionado</h2>

              <p>{produtoSelecionado.nome}</p>
              <p>Preço: R${produtoSelecionado}</p>
            </div>)}
        </div>
    );
}
export default App;