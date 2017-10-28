import {
  GraphQLNonNull,
  GraphQLInt,
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

function updateUser() {
  return {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      email: {
        type: GraphQLString,
      },
      first_name: {
        type: GraphQLString,
      },
      last_name: {
        type: GraphQLString,
      },
    },
    resolve(source, args, { models }) {
      return models.User.findById(args.id)
        .then((user) => {
          return user.update(args).then((self) => {
            return self;
          });
        }).catch(e => {
          console.log(e);
        });
    },
  };
}

export { adduser, updateUser };

