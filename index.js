import express from 'express';
import bodyParse from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


const app = express();
app.use(
    "/graphql",
    bodyParse.json(),
    graphqlExpress({
        schema,
        context: {}
    })
)

app.use(
    "/graphiql",
    graphiqlExpress({ endpointURL: "/graphql" })
)

app.listen(8081);
