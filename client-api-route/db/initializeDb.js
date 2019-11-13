
const initializeDb = db => {
  return {
    initialize() {
      db.defaults({ user: [], pet: [] }).write();

      db.get("user")
        .push({
          id: "1",
          createdAt: Date.now(),
          modifiedAt: null,
          firstName: "Bill",
          lastName: "Smith",
          avatar: null
        })
        .write();

        db.get("user")
        .push({
          id: "2",
          createdAt: Date.now(),
          modifiedAt: null,
          firstName: "Jen",
          lastName: "Day",
          avatar: null
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
