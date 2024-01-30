import { Request, Response } from "express";
import { Todo } from "../models/todo.model";

class TodoController {
  public async create(req: Request, res: Response) {
    const { title, description } = req.body;

    try {
      const todo = await Todo.create({ title, description });
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const todos = await Todo.findAll();
      return res.json(todos);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;

    try {
      const todo = await Todo.findByPk(id);

      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }

      if (title) {
        todo.title = title;
      }

      todo.description = description;

      if (typeof isCompleted !== "undefined") {
        todo.isCompleted = isCompleted;
      }

      await todo.save();
      return res.json(todo);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  public async remove(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const todo = await Todo.findByPk(id);

      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }

      await todo.destroy();
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new TodoController();
