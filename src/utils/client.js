/* eslint-disable */

import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch"; // required for gatsby build
import { endpoint } from "../../config";

const client = new ApolloClient({
  uri: endpoint
});

export default client;
