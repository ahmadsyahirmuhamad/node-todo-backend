export default (sequelize, DataTypes) => {
  // set models attributes
  const Todo = sequelize.define('todo', {
    title: {
      type: DataTypes.STRING, 
    },
    description: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      // should have default val
    },
  });

    // set models associations
  Todo.associate = (models) => {
    Todo.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };
  return Todo;
};
