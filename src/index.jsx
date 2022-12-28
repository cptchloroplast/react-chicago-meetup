import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// MUI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Theme from './material-ui/theme';

// COMPONENTS
import App from './App'

// MSW
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="xl">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  </React.StrictMode>
)
