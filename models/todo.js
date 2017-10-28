'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING, 
    },
    description: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  Todo.associate = function(models) {
    Todo.hasMany(models.SubTodo, {
      foreignKey: 'todo_id',
    });
    Todo.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  }
  return Todo;
};