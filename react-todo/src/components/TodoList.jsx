import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React Router", completed: false },
    { id: 2, task: "Build a TodoList component", completed: true },
  ]);

  // Add new todo
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Toggle completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">My Todo List</h2>

      <AddTodoForm onAdd={addTodo} />

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`flex justify-between items-center border p-2 rounded cursor-pointer 
              ${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            <span>{todo.task}</span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent toggle when deleting
                deleteTodo(todo.id);
              }}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
