import "./ProductCard.css";

function ProductCard({name, price}) {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>Preço: R$ {price}</p>
        </div>
    );
}
export default ProductCard;