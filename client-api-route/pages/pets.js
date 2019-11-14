import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/Layout";

const PETS_QUERY = gql`
query petsQuery {
  pets {
    id
    createdAt
    modifiedAt
    name
    type
    img
    person {
      id
      firstName
      lastName
      fullName
      userSettings {
        theme
        emailNotifications
        pushNotifications
      }
    }
  }
}
`;

const Pets = () => {
  const { data, loading, error } = useQuery(PETS_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Layout title="Pets">
      <div>
        <h1>Pets</h1>
        <pre>{JSON.stringify(data.pets, null, 2)}</pre>
      </div>
    </Layout>
  );
};

export default withApollo(Pets);
