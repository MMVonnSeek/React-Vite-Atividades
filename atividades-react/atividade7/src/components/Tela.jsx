function Tela(props) {
    const temaClaro = {
        backgroundColor: "#ccc",
        color: "#222",
        height: "100vh",
        paddingTop: "50px",
        transition: "0,3s",
    };

    const temaEscuro = {
        backgroundColor: "#222",
        color: "#ccc",
        height: "100vh",
        paddingTop: "50px",
        transition: "0,3s",
    };

    return (
        <div style={props.tema === "claro" ? temaClaro : temaEscuro}>
        <h1>Tema {props.tema === "claro" ? "Claro" : "Escuro"}</h1>
        {props.children}
        </div>
    );
}
export default Tela;