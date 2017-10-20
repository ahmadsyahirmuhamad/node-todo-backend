
import express from 'express';
import bodyParse from 'body-parser';
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import models from './models';


const types = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(types);


const resolverFiles = fileLoader(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolverFiles);


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// initialize express
const app = express();

// initialize graphql endpoint
app.use(
  '/graphql',
  bodyParse.json(),
  graphqlExpress({
    schema,
    context: { models },
  }),
);

// initialize graphiql endpoint
app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' }),
);

// init db
// run server
models.sequelize.sync()
  .then(() => {
    app.listen(8081);
  });
