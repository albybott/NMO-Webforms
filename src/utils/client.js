import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";
import { endpoint } from "../../config";

const client = new ApolloClient({
  uri: endpoint
});

export default client;
