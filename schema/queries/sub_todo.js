import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
  } from 'graphql';
  
  import SubTodoType from './../types/sub_todo';
  
  function getSubTodo() {
    return {
      type: SubTodoType,
      description: 'get sub todo',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve(root, { id }, { models }) {
        return models.SubTodo.findOne({ where: { id } });
      },
    };
  }
  
  function allSubTodos() {
    return {
      type: new GraphQLList(SubTodoType),
      description: 'get all sub todo',
      resolve(root, args, { models }) {
        return models.SubTodo.findAll({ where: args });
      },
    };
  }
  
  
  export { getSubTodo, allSubTodos };
  