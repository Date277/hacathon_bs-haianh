import React from "react";
import { ListGroup, Button } from "react-bootstrap";

interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onRemove: () => void;
  onComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove, onComplete }) => {
  const completeTodo = () => {
    onComplete();
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <div>
        <Button variant="primary" onClick={completeTodo}>
          Complete
        </Button>
        <Button variant="danger" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
