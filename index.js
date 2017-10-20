import express from 'express';
import bodyParse from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// initialize express
const app = express();

// initialize graphql endpoint
app.use(
    "/graphql",
    bodyParse.json(),
    graphqlExpress({
        schema,
        context: {}
    })
)

// initialize graphiql endpoint
app.use(
    "/graphiql",
    graphiqlExpress({ endpointURL: "/graphql" })
)

// init db
// run server
models.sequelize.sync()
    .then(x => {
        app.listen(8081);
    });


