function ProdutoItem({nome, preco, imagem, onSelect}) {
    return (
        <div className="produto-card">
            <img src={imagem} alt={nome} className="img-foto"/>
            <h2>{nome}</h2>
            <p>Preço: R$ {preco}</p>
        
            <button onClick={onSelect}>Selecionar</button>
        </div>
    );
}
export default ProdutoItem;