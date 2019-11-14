const initializeDb = db => {
  return {
    initialize() {
      db.defaults({ user: [], pet: [], settings: [] }).write();


      db.get("settings")
        .push({
          id: "1",
          createdAt: Date.now(),
          modifiedAt: null,
          theme: "DARK",
          emailNotifications: false,
          pushNotifications: false
        })
        .write();

      db.get("settings")
        .push({
          id: "2",
          createdAt: Date.now(),
          modifiedAt: null,
          theme: "LIGHT",
          emailNotifications: true,
          pushNotifications: true
        })
        .write();

      db.get("user")
        .push({
          id: "1",
          email: "bsmith@website.com",
          verified: false,
          createdAt: Date.now(),
          modifiedAt: null,
          firstName: "Bill",
          lastName: "Smith",
          avatar: null,
          settingsId: "1"
        })
        .write();

      db.get("user")
        .push({
          id: "2",
          email: "jend@test.com",
          verified: true,
          createdAt: Date.now(),
          modifiedAt: null,
          firstName: "Jen",
          lastName: "Day",
          avatar: null,
          settingsId: "2"
        })
        .write();


      db.get("pet")
        .push({
          id: "1",
          createdAt: Date.now(),
          modifiedAt: null,
          name: "Fido",
          type: "DOG",
          personId: null
        })
        .write();

      db.get("pet")
        .push({
          id: "2",
          createdAt: Date.now(),
          modifiedAt: null,
          name: "Kitty",
          type: "CAT",
          personId: "1"
        })
        .write();
    }
  };
};

module.exports = initializeDb;
