export const userQueries = {
  Query: {
    async users(parent, { where }, { models }, info) {
      return models.User.findMany(where);
    },

    async user(parent, { where }, { models }, info) {
      return models.User.findOne(where);
    }
  },
  User: {
    fullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    avatar(user) {
      const avatar = user.avatar;
      return avatar
        ? user.avatar
        : `https://ui-avatars.com/api/?rounded=true&name=${user.firstName}+${user.lastName}`;
    },
    pets(person, args, ctx) {
      const personId = person.id;
      return ctx.models.Pet.findMany({ personId: personId });
    }
  }
};
