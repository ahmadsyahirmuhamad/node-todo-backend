import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import UserType from './../types/user';

function getUser() {
  return {
    type: UserType,
    description: 'get user',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve(root, { id }, { models }) {
      return models.User.findOne({ where: { id } });
    },
  };
}

function allUsers() {
  return {
    type: new GraphQLList(UserType),
    description: 'get all user',
    resolve(root, args, { models }) {
      return models.User.findAll({ where: args });
    },
  };
}


export { getUser, allUsers };

