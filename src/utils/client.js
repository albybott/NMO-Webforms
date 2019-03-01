import ApolloClient from "apollo-boost";
import { endpoint } from "../../config";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export default client;
