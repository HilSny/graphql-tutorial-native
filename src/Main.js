import ApolloClient, {createNetworkInterface} from 'apollo-client'

import {ApolloProvider} from 'react-apollo'
import App from './App'
import React from 'react'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'http://localhost:4000/graphql'})
})

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default Main
