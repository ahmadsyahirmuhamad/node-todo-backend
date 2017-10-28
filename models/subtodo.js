'use strict';
module.exports = (sequelize, DataTypes) => {
  var SubTodo = sequelize.define('SubTodo', {
    title: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  SubTodo.associate = function(models) {
    SubTodo.belongsTo(models.Todo, {
      foreignKey: 'todo_id',
    });
  }
  return SubTodo;
};