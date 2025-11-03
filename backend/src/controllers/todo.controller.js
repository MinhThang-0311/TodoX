import Todo from "../models/todo.model.js";
import { logError, logInfo } from "../untils/logger.js";

// [GET] /api/todos
export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    logError("Failed to get todos: " + error.message);
    next(error);
  }
};

// [POST] /api/todos
export const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const checkExisting = await Todo.findOne({ title });
    if (checkExisting) {
      return res.status(400).json({ message: "Nhiệm vụ đã tồn tại" });
    }
    const newTodo = await Todo.create({ title, description });
    logInfo(`Created new todo: ${newTodo.title}`);
    res.status(201).json(newTodo);
  } catch (error) {
    logError("Failed to create todo: " + error.message);
    next(error);
  }
};

// [PUT] /api/todos/:id
export const updateTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const checkExisting = await Todo.findOne({ title });
    if (checkExisting) {
      return res.status(400).json({ message: "Nhiệm vụ đã tồn tại" });
    }
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (error) {
    logError("Failed to update todo: " + error.message);
    next(error);
  }
};

// [DELETE] /api/todos/:id
export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    logInfo(`Deleted todo: ${todo.title}`);
    res.status(204).send();
  } catch (error) {
    logError("Failed to delete todo: " + error.message);
    next(error);
  }
};
