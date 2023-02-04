import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import App from './App'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://us-central1-regiters-api.cloudfunctions.net/crud/graphql',
  })
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
