import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/Layout";

const USERS_QUERY = gql`
query usersQuery {
  users {
    id
    createdAt
    modifiedAt
    firstName
    lastName
    fullName
    avatar
  }
}
`;

const Users = () => {
  const { data, loading, error } = useQuery(USERS_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

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
