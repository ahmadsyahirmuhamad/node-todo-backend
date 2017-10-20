import Sequelize from 'sequelize';

// set sequelize config
const config = {
  database: 'node-todo-app-dev',
  username: 'postgres',
  password: 'postgres',
  options: {
    dialect: 'postgres',
  },
};

// initialize sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options,
);

// set models
const models = {
  User: sequelize.import('./users'),
  Todo: sequelize.import('./todos'),
};

// set associations between models
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});


models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
