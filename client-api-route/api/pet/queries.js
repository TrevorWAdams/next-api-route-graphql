export const petQueries = {
  Query: {
    // pets(parent, args, context, info)
    async pets(parent, { where }, { models }, info) {
      return models.Pet.findMany(where);
    },

    async pet(parent, { where }, { models }, info) {
      return models.Pet.findOne(where);
    }
  },
  Pet: {
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300";
    },
    person(pet, args, ctx) {
      const personId = pet.personId;
      return ctx.models.User.findOne({ id: personId });
    }
  },
};
