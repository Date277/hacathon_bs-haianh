// import { Request, Response } from "express";
// import Todo from "./Todo";

// class TodoController {
//   // Tạo một Todo mới
//   async createTodo(req: Request, res: Response) {
//     try {
//       const { title, description } = req.body;
//       const newTodo = await Todo.create({ title, description });
//       return res.status(201).json(newTodo);
//     } catch (error) {
//       return res.status(500).json({ error: "Could not create a new Todo" });
//     }
//   }

//   // Đọc tất cả các Todo
//   async getAllTodos(req: Request, res: Response) {
//     try {
//       const todos = await Todo.findAll();
//       return res.status(200).json(todos);
//     } catch (error) {
//       return res.status(500).json({ error: "Could not fetch Todos" });
//     }
//   }

//   // Sửa một Todo theo ID
//   async updateTodoById(req: Request, res: Response) {
//     const { id } = req.params;
//     const { title, description, isCompleted } = req.body;
//     const todo = await Todo.findByPk(id);

//     if (!todo) {
//       return res.status(404).json({ error: "Todo not found" });
//     }

//     // Ép kiểu todo về kiểu dữ liệu của mô hình Todo
//     const todoInstance = todo as any;

//     todoInstance.title = title;
//     todoInstance.description = description;
//     todoInstance.isCompleted = isCompleted;

//     await todoInstance.save();

//     return res.status(200).json(todoInstance);
//   }

//   // Xóa một Todo theo ID
//   async deleteTodoById(req: Request, res: Response) {
//     const { id } = req.params;
//     const todo = await Todo.findByPk(id);

//     if (!todo) {
//       return res.status(404).json({ error: "Todo not found" });
//     }

//     await todo.destroy();
//     return res.status(204).send();
//   }
// }

// export default new TodoController();
