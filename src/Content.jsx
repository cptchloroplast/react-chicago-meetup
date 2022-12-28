import * as React from 'react';
import { Routes, Route } from "react-router-dom";

// MUI
import Grid from '@mui/material/Grid';

// COMPONENTS
import Redirect from './Redirect';
import Demo from './Demo/Demo';

function Content() {

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      sx={{
        padding: '36px 0px',
        minHeight: '65vh',
      }}
    >

      <Routes>
        <Route
          path="/"
          element={(
            <Demo />
          )}
        />

        <Route
          path="*"
          element={<Redirect />}
        />
      </Routes>
    </Grid>
  )
}

export default Content;
