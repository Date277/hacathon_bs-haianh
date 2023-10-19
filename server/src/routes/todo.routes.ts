// src/routes/todo.routes.ts

import { Router } from "express";
import TodoController from "../controllers/todo.controller";

const router = Router();

router.post("/api/v1/todo", TodoController.create);
router.get("/api/v1/todo", TodoController.list);
router.put("/api/v1/todo/:id", TodoController.update);
router.delete("/api/v1/todo/:id", TodoController.remove);

export default router;
