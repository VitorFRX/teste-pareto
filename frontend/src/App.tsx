
import { ContextProvider } from './context';
import { RouterProvider } from 'react-router-dom';

// ANCHOR --> IMPORTS ROUTES
import { router } from './routes/routes';
// END ROUTES

// ANCHOR --> IMPORTS STYLED COMPONENTS
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { GlobalStyle } from './assets/globalStyle';
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS REACT QUERY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// END REACT QUERY

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default App;