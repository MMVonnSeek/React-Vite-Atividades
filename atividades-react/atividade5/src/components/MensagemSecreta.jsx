import React, {useState} from "react";

function MensagemSecreta() {
    const [mostrar, setmostrar] = useState(false);

function alternarMensagem() {
    setmostrar(!mostrar);
}
return (
    <div style={{marginTop: "50px"}}>
        <h2>Mensagem Secreta</h2>
        <button onClick={alternarMensagem}>{mostrar ? "Esconder Mensagem": "Mostrar Mensagem"}</button>

        {mostrar && <p>Essa mensagem é secreta</p>}
    </div>
);
}
export default MensagemSecreta;