import { useEffect, useState } from "react";
import { getStorage } from "../../../service/storage/storage";
import { TASKS } from "../../../consts/storageKeys";
import { v4 as uuidv4 } from "uuid";

// Hook personalizado para gerenciar tarefas
export function useTodo() {
  const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas

  // Função que resgata as tarefas do localStorage
  const getTasks = async () => {
    const storedTasks = getStorage(TASKS); // Pega as tarefas do localStorage
    const storedJsonTasks = storedTasks !== null ? JSON.parse(storedTasks) : ""; // Converte as tarefas para um objeto JavaScript, se existirem
    setTasks(storedJsonTasks); // Armazena as tarefas no estado
  };

  // Função para adicionar uma nova tarefa
  const addTask = (task, onAfterAdd) => {
    const format = task.trim(); // Remove espaços em branco no início e no fim do texto da tarefa
    setTasks([...tasks, { id: uuidv4(), text: format }]); // Adiciona a nova tarefa à lista de tarefas
    onAfterAdd(); // Chama a função de callback após adicionar a tarefa
  };

  // Função para deletar uma tarefa pelo id
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); // Filtra a lista de tarefas, removendo a tarefa com o id especificado
    setTasks(updatedTasks); // Atualiza o estado com a lista de tarefas filtrada
  };

  // Função para atualizar o texto de uma tarefa pelo id
  const updateTask = (id, newText, onFinish) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text: newText }; // Atualiza o texto da tarefa correspondente ao id
      }
      return task; // Retorna a tarefa sem alterações se o id não corresponder
    });

    setTasks(updatedTasks); // Atualiza o estado com a lista de tarefas modificada
    onFinish(); // Chama a função de callback após atualizar a tarefa
  };

  // Efeito que resgata as tarefas do localStorage quando o hook é carregado/renderizado
  useEffect(() => {
    getTasks(); // Chama a função para resgatar as tarefas do localStorage
  }, []);

  // Retorna as tarefas e as funções para gerenciar as tarefas
  return {
    tasks,
    deleteTask,
    updateTask,
    addTask,
  };
}