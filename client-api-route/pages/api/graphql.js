import { ApolloServer, gql } from "apollo-server-micro";
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit";
import { petQueries } from "../../api/pet/queries";
import { petMutations } from "../../api/pet/mutations";
import { userQueries } from "../../api/user/queries";
import { userMutations } from "../../api/user/mutations";
import { models, db } from "../../db";
import Pet from "../../api/pet/typeDefs.graphql";
import User from "../../api/user/typeDefs.graphql";
import {createToken, getUserFromToken} from "../../lib/auth"

const resolvers = mergeResolvers([
  petQueries,
  petMutations,
  userQueries,
  userMutations
]);

const typeDefs = mergeTypeDefs([Pet, User]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context({req, connection}) {

    const token = req.headers.authorization
    const user = getUserFromToken(token)
    return { models, db, user, createToken};
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
