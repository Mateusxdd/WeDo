import React, { use, useEffect, useState } from "react";

function Tarefas() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar conta de luz",
    "Pagar conta de água",
    "Assistir aulas",
  ]);

  useEffect(() => {
    const tarefaStorage = localStorage.getItem("@tarefa");
    if (tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  function cadastrarTarefas(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Cadastro de tarefas</h1>
      <form onSubmit={cadastrarTarefas}>
        <label htmlFor="nome">Nome da tarefa:</label>
        <input
          placeholder="Digite uma tarefa"
          type="text"
          id="nome"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <div>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tarefas;
