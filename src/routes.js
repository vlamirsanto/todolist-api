const express = require("express");
const TodoListController = require("./controllers/TodoListController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: "API de TODO LIST" });
});
routes.get("/todo-list", TodoListController.index);
routes.post("/todo-list", TodoListController.save);
routes.put("/todo-list/:id", TodoListController.update);
routes.delete("/todo-list/:id", TodoListController.delete);

module.exports = routes;
