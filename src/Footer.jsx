import * as React from 'react';

// MUI
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function Footer() {

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '10vh'
      }}
    >
      <Grid item xs={12}>
        <Typography variant='caption'>
          © 2022 nvisia. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
