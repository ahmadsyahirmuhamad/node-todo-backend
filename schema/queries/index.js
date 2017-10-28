import {
  GraphQLObjectType,
} from 'graphql';

import { getUser } from './user';
import { getTodo, allTodos } from './todo';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => ({
    // user
    getUser: getUser(),

    // todo
    getTodo: getTodo(),
    allTodos: allTodos(),
  }),
});

export default Query;
