export default (sequelize, DataTypes) => {
    // set models attributes
    const SubTodo = sequelize.define('sub_todo', {
      title: {
        type: DataTypes.STRING,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        // should have default val
      },
    });
  
      // set models associations
    SubTodo.associate = (models) => {
      SubTodo.belongsTo(models.Todo, {
        foreignKey: 'todo_id',
      });
    };
    return SubTodo;
  };
  