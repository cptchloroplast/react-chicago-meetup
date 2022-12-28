import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [])

  return null;
}

export default Redirect;
