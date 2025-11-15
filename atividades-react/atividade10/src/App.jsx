import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import {products} from "./data/products";

function App() {
  return (
    <div className="container">
      <h1>Catalogo de Produtos</h1>

      {products.map((item) => ( 
        <ProductCard key={item.id} name={item.name} price={item.price}/>
      ))}
    </div>
  );
}
export default App;