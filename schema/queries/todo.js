import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import TodoType from './../types/todo';

function getTodo() {
  return {
    type: TodoType,
    description: 'get todo',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve(root, { id }, { models }) {
      return models.Todo.findOne({ where: { id } });
    },
  };
}

function allTodos() {
  return {
    type: new GraphQLList(TodoType),
    description: 'get all todo',
    resolve(root, args, { models }) {
      return models.Todo.findAll({ where: args });
    },
  };
}


export { getTodo, allTodos };
