import { useEffect, useState } from "react";
import {
  Button,
  Container,
  EditInput,
  Input,
  TaskItem,
  TaskList,
  Title,
} from "./todo-styles";
import { useTodo } from "./hooks/useTodo";
import { setStorage } from "../../service/storage/storage";
import { TASKS } from "../../consts/storageKeys";


export function TodoApp() {
  const { tasks, addTask, deleteTask, updateTask } = useTodo();
  const [task, setTask] = useState(""); // Estado para a nova tarefa a ser adicionada.
  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(""); // Estado para o texto da tarefa que está sendo editada.

  // Usa o hook useEffect para setar as tarefas quando a página é montada
  useEffect(() => {
    setStorage(TASKS, JSON.stringify(tasks)); // Salvar as tarefas
  }, [tasks]);

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  return (
    <Container>
      <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button
        onClick={() =>
          addTask(task, () => {
            setTask(""); // Limpa o campo de input após adicionar a tarefa
          })
        }
      >
        Add Task
      </Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <EditInput
                  type="text"
                  value={editingTaskText.text}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                />
                <button
                  onClick={() =>
                    updateTask(task.id, editingTaskText, () => {
                      setEditingTaskId(null); // Limpa o id da tarefa em edição.
                      setEditingTaskText(""); // Limpa o texto da tarefa em edição.
                    })
                  }
                  type="button"
                >
                  Confirmar
                </button>
              </>
            ) : (
              <>
                {task.text}
                <div>
                  <button
                    type="button"
                    onClick={() => editTask(task.id, task.text)}
                  >
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
}
