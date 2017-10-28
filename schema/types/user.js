import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import TodoType from './todo';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve(user) {
        return user.id;
      },
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return user.email;
      },
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return user.first_name;
      },
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return user.last_name;
      },
    },
    full_name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(user) {
        return `${user.first_name} ${user.last_name}`;
      },
    },
    todos: {
      type: new GraphQLList(TodoType),
      resolve(user) {
        return user.getTodos();
      },
    },
  }),
});

export default UserType;