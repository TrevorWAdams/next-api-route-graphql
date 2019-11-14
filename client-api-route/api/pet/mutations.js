export const petMutations = {
  Mutation: {
     //async addPet(parent, args, context, info)
    addPet(parent, { data }, { models }, info) {
      return models.Pet.create(data);
    }
  }
};
