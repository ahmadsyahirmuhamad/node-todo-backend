export default (sequelize, DataTypes) => {
  // set model attributes
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  // set models associations
  User.associate = (models) => {
    User.hasMany(models.Todo, {
      foreignKey: 'user_id',
    });
  };
  return User;
};
