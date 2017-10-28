import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
  } from 'graphql';
  
  const SubTodoType = new GraphQLObjectType({
    name: 'SubTodo',
    description: 'This represents a SubTodo',
    fields: () => ({
      id: {
        type: GraphQLInt,
        resolve(subTodo) {
          return subTodo.id;
        },
      },
      todo_id: {
        type: GraphQLInt,
        resolve(subTodo) {
          return subTodo.todo_id;
        },
      },
      title: {
        type: GraphQLString,
        resolve(subTodo) {
          return subTodo.title;
        },
      },
      completed: {
        type: GraphQLBoolean,
        resolve(subTodo) {
          return subTodo.completed;
        },
      },
    }),
  });
  
  export default SubTodoType;
  