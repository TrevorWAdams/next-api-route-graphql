const low = require("lowdb");
const Memory = require("lowdb/adapters/Memory");
const initializeDb = require("./initializeDb");
const adapter = new Memory();

const db = low(adapter);
initializeDb(db).initialize();
const createPetModel = require("./pet");
const createUserModel = require("./user");
const createSettingsModel = require("./settings");

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db),
    Settings: createSettingsModel(db)
  },
  db
};
