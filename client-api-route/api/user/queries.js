import { authenticated } from "../../lib/auth";

export const userQueries = {
  Query: {
    me: authenticated((parent, args, { user }) => {
      return user;
    }),
    //async users(parent, args, context, info)
    users(parent, { where }, { models }, info) {
      return models.User.findMany(where);
    },

    user(parent, { where }, { models }, info) {
      return models.User.findOne(where);
    },

    userSettings(parent, { where }, { models }, info) {
      return models.Settings.findMany(where);
    },

  },
  User: {
    fullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
    avatar(user) {
      const hasAvatar = user.avatar;
      return hasAvatar
        ? user.avatar
        : `https://ui-avatars.com/api/?rounded=true&name=${user.firstName}+${user.lastName}`;
    },
    pets(user, args, ctx) {
      return ctx.models.Pet.findMany({ personId: user.id });
    },
    userSettings(user, args, ctx) {
      return ctx.models.Settings.findOne({ id: user.settingsId });
    }
  },
  UserSettings: {
    user(userSettings, args, ctx) {
      return ctx.models.User.findOne({settingsId: userSettings.id});
    },
  }
};
