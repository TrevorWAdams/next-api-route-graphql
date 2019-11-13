export const petMutations = {
  Mutation: {
    async addPet(parent, { data }, { models }, info) {
      return models.Pet.create(data);
    }
  }
};
