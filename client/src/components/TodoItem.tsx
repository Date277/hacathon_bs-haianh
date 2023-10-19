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
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {todo.title}
      <Button variant="danger" onClick={onRemove}>
        Remove
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
