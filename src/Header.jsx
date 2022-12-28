import * as React from 'react';

// MUI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';

// ASSETS
import NvisiaLogoSVG from './assets/svg-nvisia-logo';

function Header() {
  const theme = useTheme();

  return (

    <Grid
      container
      spacing={6}
      direction="row"
      justifyContent="space-between"
      sx={{
        padding: '12px 0px',
      }}
    >

      <Grid item>
        &nbsp;
      </Grid>

      <Grid item>
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '20vh'
        }}
      >
        <Grid item>
          <NvisiaLogoSVG
            fill={theme.palette.primary.main}
            sx={{
              width: 148,
              height: 144,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h2'>
            {
              'Effective use of useEffect'
            }
          </Typography>
        </Grid>
      </Grid>
      </Grid>
      
      <Grid item>
        &nbsp;
      </Grid>

    </Grid>
  )
}

export default Header;
