import {
  GraphQLObjectType,
} from 'graphql';

import { getUser } from './user';
import { getTodo, allTodos } from './todo';
import { getSubTodo, allSubTodos } from './sub_todo';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => ({
    // user
    getUser: getUser(),

    // todo
    getTodo: getTodo(),
    allTodos: allTodos(),

    // sub todo
    getSubTodo: getSubTodo(),
    allSubTodos: allSubTodos(),
  }),
});

export default Query;
