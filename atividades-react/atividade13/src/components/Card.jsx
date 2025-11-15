function Card({titulo, numero, descricao}) {
    return (
        <div className="card">
            <h2>{titulo}</h2>
            <p className="numero">{numero}</p>
            <p>{descricao}</p>
        </div>
    );
}
export default Card;