import {
  GraphQLObjectType,
} from 'graphql';

import { adduser, updateUser } from './user';
import { addTodo, updateTodo } from './todo';
import { addSubTodo, updateSubTodo } from './sub_todo';

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  
  fields() {
    return {
      // User
      adduser: adduser(),
      updateUser: updateUser(),
      // Todo
      addTodo: addTodo(),
      updateTodo: updateTodo(),
      // SubTodo
      addSubTodo: addSubTodo(),
      updateSubTodo: updateSubTodo(),
    };
  },
});

export default Mutation;

