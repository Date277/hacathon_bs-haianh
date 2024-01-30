import React, { useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/todo")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    axios
      .post("http://localhost:3000/api/v1/todo", {
        title: newTodo,
        description: "",
        isCompleted: false,
      })
      .then((response) => {
        const newTodoItem = response.data;
        setTodos([...todos, newTodoItem]);
        setNewTodo("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const removeTodo = (id: number) => {
    axios
      .delete(`http://localhost:3000/api/v1/todo/${id}`)
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const completeTodo = (id: number) => {
    axios
      .put(`http://localhost:3000/api/v1/todo/${id}`, {
        isCompleted: true,
      })
      .then(() => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: true } : todo
        );
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ListGroup>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => removeTodo(todo.id)}
            onComplete={() => completeTodo(todo.id)}
          />
        ))}
      </ListGroup>
      <div className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="primary" onClick={addTodo}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
