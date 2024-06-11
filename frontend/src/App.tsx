import { ApolloProvider } from '@apollo/client';

import { client } from './utils/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>hello</h1>
    </ApolloProvider>
  );
}

export default App;
