import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({uri: "https://api.flangrys.io/graphql/"}),
    cache: new InMemoryCache(),
})
