import React from "react";
import { withApollo } from "../lib/apollo";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const LOGIN = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        email
        fullName
      }
    }
  }
`;

const LoginButton = ({ email, password }) => {
  const [login] = useMutation(LOGIN);
  return (
    <button
      onClick={() =>
        login({
          variables: {
            email,
            password
          }
        })
      }
    >
      Login
    </button>
  );
};

export default withApollo(LoginButton);
