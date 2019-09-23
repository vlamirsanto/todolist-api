const express = require("express");

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));

    this.express.use(function(req, res, next) {
      res.status(404).json({ message: "Sorry cant find that!" });
    });
  }
}

module.exports = new App().express;
