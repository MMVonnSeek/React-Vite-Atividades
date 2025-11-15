function Produto(props) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            width: "250px",
            margin: "10px",
            textAlign: "center"}}>
        <p>{props.nome}</p>
        <p>Preço R$: {props.preco}</p>
        <p>{props.descricao}</p>
        </div>
    );
}
export default Produto;