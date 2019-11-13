import React from "react";
import { withApollo } from "../lib/apollo";
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";
import Layout from "../components/Layout";

// const HELLO_QUERY = gql`
//   query HelloQuery {
//     sayHello
//   }
// `;

const Home = () => {
  // const { data, loading, error } = useQuery(HELLO_QUERY);
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error</div>;

  return (
    <Layout title="Home">
      <div>
        <h1>Home</h1>
        {/* <p>{data.sayHello}</p> */}
      </div>
    </Layout>
  );
};

export default withApollo(Home);
