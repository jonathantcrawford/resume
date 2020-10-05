import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import * as Realm from "realm-web";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";


const REALM_APP_ID = "resume-realm-nxcpz"; // e.g. myapp-abcde
const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${REALM_APP_ID}/graphql`;
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

async function getValidAccessToken() {
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // The logged in user's access token might be stale,
    // Refreshing custom data also refreshes the access token
    await app.currentUser.refreshCustomData();
  }
  // Get a valid access token for the current user
  return app.currentUser?.accessToken;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphql_url,
    fetch: async (uri: RequestInfo, options: RequestInit) => {
      if (!options.headers) {
        options.headers = {} as Record<string, string>;
      }
      const accessToken = await getValidAccessToken();
      const authenticatedOptions: RequestInit = {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`
        }
      }
      return fetch(uri, authenticatedOptions);
    },
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
