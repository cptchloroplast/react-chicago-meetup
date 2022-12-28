import { Button, Grid } from "@mui/material"
import useTimer from "./useTimer"

function Timer() {
  const { count, reset, stop, start } = useTimer()
  return (
    <Grid container direction="column" gap={1}>
      <Grid item>Count: {count}</Grid>
      <Grid item container direction="row" gap={1}>
        <Button variant="contained" color="success"onClick={start}>Start</Button>
        <Button variant="contained" color="error" onClick={stop}>Stop</Button>
        <Button variant="contained" onClick={reset}>Reset</Button>
      </Grid>
    </Grid>
  )
    
}

export default Timer
