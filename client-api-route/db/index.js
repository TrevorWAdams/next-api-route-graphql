const low = require("lowdb");
const Memory = require("lowdb/adapters/Memory");
const initializeDb = require("./initializeDb");
const adapter = new Memory();

const db = low(adapter);
initializeDb(db).initialize();

const createPetModel = require("./pet");
const createUserModel = require("./user");

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db)
  },
  db
};
