import { authenticated } from "../../lib/auth";

export const userMutations = {
  Mutation: {
    //async addUser(parent, args, context, info)
    addUser(parent, { data }, { models }, info) {
      return models.User.create(data);
    },

    updateUserSettings: authenticated((_, { input }, { user, models }) => {
      return models.UserSettings.updateOne({ userId: user.id }, input);
    }),
    
    updateMe: authenticated((_, { input }, { user, models }) => {
      return models.User.updateOne({ id: user.id }, input);
    }),

    login(_, { input }, { models, createToken }) {
      const user = models.User.findOne(input);

      if (!user) {
        throw new AuthenticationError("wrong email + password combo");
      }

      const token = createToken(user);

      return { token, user };
    }
  }
};
