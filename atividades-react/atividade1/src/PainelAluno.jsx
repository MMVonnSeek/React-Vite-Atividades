function PainelAluno({nome, curso, pontos}) {
    return (
        <div style={{border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "300px", margin: "20px auto"}}>
            <h2>Aluno: {nome}</h2>
            <p>Curso: {curso}</p>
            <p>Pontuação: {pontos}</p>
        </div>
    );
}
export default PainelAluno;