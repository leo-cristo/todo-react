import { useState, useEffect } from "react";
import "./App.css";

const loadTodos = () => {
  const dados = localStorage.getItem( "todo-app-tasks");
  if (!dados) return []
  try {
    return JSON.parse(dados);// 🔄 Converte texto → objeto
  } catch (error) { // ⚠️ Se der erro, retorna []
    return [];
  }
}

const saveTodos = (list) => {
  localStorage.setItem("todo-app-tasks", JSON.stringify(list)); // 💾 Salva como texto
};




function App() {
  const [todos, setTodos] = useState(loadTodos()); // 🧠 Estado inicial vindo do localStorage

  // 🔁 Sincroniza mudanças no estado com o localStorage
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>🚀 TODO APP - PRÁTICA DO ZERO</h1>
      <p>Vamos construir tudo passo a passo!</p>
      <p>Total de tarefas: {todos.length}</p>
    </div>
  );
}

export default App;
