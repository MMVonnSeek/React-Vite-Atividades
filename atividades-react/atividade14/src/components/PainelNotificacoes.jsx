import { useState } from "react";

function PainelNotificacoes() {
    const [mostrar, setMostrar] = useState(false);
    return (
        <div className="painel-container">
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Esconder Notificações" : "Mostar Notificações"}
            </button>
            {mostrar && (
            <div className="painel">
                    <p>Você não tem novas notificações</p>
            </div>)}
        </div>
    );
}
export default PainelNotificacoes;