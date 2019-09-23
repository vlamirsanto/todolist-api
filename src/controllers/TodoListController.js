const { TodoList } = require("../models");

class TodoListController {
  async index(req, res) {
    const todoList = await TodoList.findAll({});

    return res.json({ items: todoList });
  }

  async save(req, res) {
    const { todo } = req.body;

    const result = await TodoList.create({
      todo
    });

    return res.json({ items: result });
  }

  async update(req, res) {
    const { id } = req.params;
    const { todo } = req.body;

    const result = await TodoList.update({ todo }, { where: { id } });

    return res.json({ items: result });
  }

  async delete(req, res) {
    const { id } = req.params;

    const result = await TodoList.destroy({
      where: { id }
    });

    return res.json({ items: result });
  }
}

module.exports = new TodoListController();
