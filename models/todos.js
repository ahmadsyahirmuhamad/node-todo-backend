export default (sequelize, DataTypes) => {
  // set models attributes
  const Todo = sequelize.define('todo', {
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
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
