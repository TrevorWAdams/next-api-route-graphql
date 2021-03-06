import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/Layout";

const USERS_QUERY = gql`
  query usersQuery {
    users {
      id
      email
      verified
      firstName
      lastName
      fullName
      avatar
      userSettings {
        theme
        emailNotifications
        pushNotifications
      }
      pets {
        name
        type
      }
    }
  }
`;

const Users = () => {
  const { data, loading, error } = useQuery(USERS_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error {JSON.stringify(error, null, 2)}</div>;

  return (
    <Layout title="Users">
      <div>
        <h1>Users</h1>
        <pre>{JSON.stringify(data.users, null, 2)}</pre>
      </div>
    </Layout>
  );
};

export default withApollo(Users);
