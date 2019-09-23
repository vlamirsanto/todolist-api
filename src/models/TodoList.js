module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define("TodoList", {
    todo: DataTypes.STRING
  });

  return TodoList;
};
