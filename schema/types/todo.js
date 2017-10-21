import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  description: 'This represents a Todo',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve(todo) {
        return todo.id;
      },
    },
    user_id: {
      type: GraphQLInt,
      resolve(todo) {
        return todo.user_id;
      },
    },
    title: {
      type: GraphQLString,
      resolve(todo) {
        return todo.title;
      },
    },
    description: {
      type: GraphQLString,
      resolve(todo) {
        return todo.description;
      },
    },
    completed: {
      type: GraphQLBoolean,
      resolve(todo) {
        return todo.completed;
      },
    },
  }),
});

export default TodoType;
