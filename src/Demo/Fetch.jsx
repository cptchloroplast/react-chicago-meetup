import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import useFetch from "./useFetch"

function Fetch() {
  const [body, setBody] = useState({ count: 0 }) // body sent in request
  const [url, setUrl] = useState("") // url to fetch data from
  const [input, setInput] = useState(url) // text input

  const { data, error, loading } = useFetch(url, body)// hook based network call
  
  const onChange = (event) => setInput(event.target.value) // update our text input
  const onClick = () => { // fetch button handler
    // increment the count in the body, mainly used to be able to fetch the same url
    setBody(x => ({ 
      count: x.count + 1
    }))
    setUrl(input) // set url to whatever is in the input
  }
  
  return  (
    <Grid container direction="column" gap={1}>
      <Grid item>
        <TextField value={input} onChange={onChange}/>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={onClick}>Fetch</Button>
      </Grid>
      <Grid item>Count: {body.count}</Grid>
      <Grid item>Loading: {loading.toString()}</Grid>
      <Grid item>Data: {JSON.stringify(data)}</Grid>
      <Grid item>Error: {error?.message}</Grid>
    </Grid>
  )
}

export default Fetch