import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import UserType from './../types/user';

function adduser() {
  return {
    type: UserType,
    args: {
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
      first_name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      last_name: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(source, args, { models }) {
      const user = models.User.create(args);
      return user;
    },
  };
}

function deleteUser() {
  return {
    type: UserType,
    args: {
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
      first_name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      last_name: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(source, args, { models }) {
      const user = models.User.create(args);
      return user;
    },
  };
}

export { adduser, deleteUser };
