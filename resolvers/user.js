export default {
  Query: {
    getUser: (parent, { id }, { models }) => {
      const user = models.User.findOne({ where: { id } });
      return user;
    },
    allUsers: (parent, args, { models }) => {
      const users = models.User.findAll();
      return users;
    },
  },

  Mutation: {
    createUser: (parent, args, { models }) => {
      const user = models.User.create(args);
      return user;
    },
  },
};
