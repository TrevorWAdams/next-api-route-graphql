export const petQueries = {
  Query: {
    //async pets(parent, args, context, info)
    pets(parent, { where }, { models }, info) {
      return models.Pet.findMany(where);
    },

    pet(parent, { where }, { models }, info) {
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
  }
};
