import * as React from 'react';

// MUI
import Grid from '@mui/material/Grid';
import Timer from './Timer';
import Fetch from './Fetch';

function Demo() {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Timer />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Fetch />
      </Grid>
    </Grid>
  )
}

export default Demo;
