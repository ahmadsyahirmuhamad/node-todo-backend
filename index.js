import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './schema/schema';
import models from './models';

// initialize express
const app = express();

// middleware
function checkAuthorizationHeaders(req, res, next) {
  if (req.headers.Authorization) {
    console.log('Authorization Token:', req.headers.Authorization);
  }
  next();
}
app.use(checkAuthorizationHeaders);

// initialize graphql endpoint
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  context: { models },
  graphiql: true,
  pretty: true,
}));

// init db
// run server
models.sequelize.sync()
  .then(() => {
    // console.log('Running a GraphQL API server at localhost:8080/graphql');
    app.listen(8080);
  });
