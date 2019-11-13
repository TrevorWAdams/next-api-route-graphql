export const userMutations = {
  Mutation: {
    //async addUser(parent, args, context, info)
    async addUser(parent, { data }, { models }, info) {
      return models.Person.create(data);
    }
  }
};
