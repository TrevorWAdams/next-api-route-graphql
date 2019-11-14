const nanoid = require("nanoid");

const createSettingsModel = db => {
  return {
    findMany(filter) {
      return db
        .get("settings")
        .filter(filter)
        .value();
    },

    findOne(filter) {
      return db
        .get("settings")
        .find(filter)
        .value();
    },

    create(settings) {
      const newSettings = { id: nanoid(), createdAt: Date.now(), ...settings };
      db.get("settings", newSettings)
        .push(newSettings)
        .write();

      return newSettings;
    },

    
    update(settings) {
      settings.modifiedAt = Date.now();
      db.get("settings")
        .find({ id: settings.id })
        .assign({ modifiedAt: settings.modifiedAt })
        .write();
      return settings;
    }
  };
};

module.exports = createSettingsModel;
