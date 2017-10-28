import {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
  } from 'graphql';
  
  import SubTodoType from './../types/sub_todo';

  function addSubTodo() {
    return {
      type: SubTodoType,
      args: {
        todo_id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        title: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(source, args, { models }) {
        const subTodo = models.SubTodo.create(args);
        return subTodo;
      },
    };
  }
  
  function updateSubTodo() {
    return {
      type: SubTodoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        completed: {
          type: GraphQLBoolean,
        },
      },
      resolve(source, args, { models }) {
        return models.SubTodo.findById(args.id)
          .then((subTodo) => {
            return subTodo.update(args).then((self) => {
              return self;
            });
          }).catch(e => {
            console.log(e);
          });
      },
    };
  }
  
  export { addSubTodo, updateSubTodo };
  
  

  