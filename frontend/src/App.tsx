import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import MainLayout from './layouts/main-layout';
import ErrorPage from './pages/error-page';
import { client } from './utils/client';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <div>Home Screen</div>,
      },
      {
        path: '/book',
        element: <div>Single book</div>,
      },
    ],
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
