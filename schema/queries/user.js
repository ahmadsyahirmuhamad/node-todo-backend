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

export { getUser };

