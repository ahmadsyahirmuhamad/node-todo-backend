import {
  GraphQLObjectType,
} from 'graphql';

import { adduser } from './user';

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields() {
    return {
      // user
      adduser: adduser(),
    };
  },
});

export default Mutation;

