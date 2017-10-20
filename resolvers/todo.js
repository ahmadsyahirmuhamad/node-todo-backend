export default {
  Query: {
    todo: (parent, { id }, { models }) => {
      const todo = models.Todo.findOne({ where: { id } });
      return todo;
    },
    todos: (parent, args, { models }) => {
      const todos = models.Todo.findAll();
      return todos;
    },
  },

  Mutation: {
    createTodo: (parent, args, { models }) => {
      const todo = models.Todo.create(args);
      return todo;
    },
  },
};
