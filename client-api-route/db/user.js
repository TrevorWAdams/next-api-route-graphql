const nanoid = require("nanoid");

const createUserModel = db => {
  return {
    findMany(filter) {
      return db
        .get("user")
        .filter(filter)
        .value();
    },

    findOne(filter) {
      return db
        .get("user")
        .find(filter)
        .value();
    },

    create(user) {
      const newUser = { id: nanoid(), createdAt: Date.now(), ...user };
      db.get("user", newUser)
        .push(newUser)
        .write();

      return newUser;
    }
  };
};

module.exports = createUserModel;
