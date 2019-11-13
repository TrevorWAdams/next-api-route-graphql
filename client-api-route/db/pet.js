const nanoid = require("nanoid");

const createPetModel = db => {
  return {
    findMany(filter) {
      return db
        .get("pet")
        .filter(filter)
        .value();
    },

    findOne(filter) {
      return db
        .get("pet")
        .find(filter)
        .value();
    },

    create(pet) {
      const newPet = { id: nanoid(), createdAt: Date.now(), ...pet };
      db.get("pet")
        .push(newPet)
        .write();
      return newPet;
    },

    update(pet) {
      pet.modifiedAt = Date.now();
      db
        .get("pet")
        .find({id: pet.id})
        .assign({ modifiedAt: pet.modifiedAt, personId: pet.personId })
        .write();
      return pet;
    }
  };
};

module.exports = createPetModel;
