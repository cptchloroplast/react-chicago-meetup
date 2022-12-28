import * as React from 'react';

// MUI
import Grid from '@mui/material/Grid';

// COMPONENTS
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Content />
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default App
