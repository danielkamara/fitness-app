const express = require("express");
const ToDo = require("../schema/todoSchema");

// Create the Router
const todoRouter = express.Router();

// Create the Routes
todoRouter.get("/", (req, res) => {
  ToDo.find((error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json({ todo_list: result });
  });
});

todoRouter.post("/", (req, res) => {
  const todo = req.body;
  todo.created_at = Date.now();
  todo.completed = false;
  ToDo.create(todo, (error, result) => {
    if (error) {
      res.status(400).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(400).json({ message: error.message });
    }
    res.status(201).json({ todo_item: result });
  });
});

todoRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  ToDo.findById(id, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(200).json({ todo: result });
  });
});

todoRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;

  ToDo.findByIdAndUpdate(id, update, { new: true }, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(202).json({ todo_item: result });
  });
});
todoRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  ToDo.findByIdAndDelete(id, (error, result) => {
    if (error) {
      res.status(404).json({ message: error.message });
    }
    res.status(204).json({ status: "deleted" });
  });
});

module.exports = todoRouter;
