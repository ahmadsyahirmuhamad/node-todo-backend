import {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
  } from 'graphql';
  
  import TodoType from './../types/todo';

  function addTodo() {
    return {
      type: TodoType,
      args: {
        user_id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        title: {
          type: new GraphQLNonNull(GraphQLString),
        },
        description: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(source, args, { models }) {
        const todo = models.Todo.create(args);
        return todo;
      },
    };
  }
  
  function updateTodo() {
    return {
      type: TodoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        completed: {
          type: GraphQLBoolean,
        },
      },
      resolve(source, args, { models }) {
        return models.Todo.findById(args.id)
          .then((todo) => {
            return todo.update(args).then((self) => {
              return self;
            });
          }).catch(e => {
            console.log(e);
          });
      },
    };
  }
  
  export { addTodo, updateTodo };
  
  

  