import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';

import MainLayout from './layouts/main-layout';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';
import { theme } from './style/theme';
import { client } from './utils/client';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
