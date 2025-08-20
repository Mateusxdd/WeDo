function ExemploStyle() {
  const meuEstilo = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    fontFamily: "Arial",
  };
  const estiloTitulo = {
    backgroundColor: "yellow",
    padding:"10px",
    color:"black",
    fontFamily:"Arial"
  };
  return (
    <div>
      <h1 style={estiloTitulo}> Meu Estilo</h1>
      <p style={meuEstilo}>Meu Parágrafo</p>
    </div>
  );
}
export default ExemploStyle;
