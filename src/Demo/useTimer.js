import { useEffect, useState } from "react"

function useTimer() {
  // let interval

  const [run, setRun] = useState(false) // is the timer running?
  const [count, setCount] = useState(0)

  // button handlers
  const start = () => setRun(true)
  const stop = () => setRun(false)
  const reset = () => setCount(0)
  
  useEffect(() => {
    if (run) {
      const interval = setInterval(() => setCount(x => x + 1), 1000) // increment count by 1 every 1 second
      console.log(count % 2 ? "tock" : "tick") // show that the timer is running in the console
      
      // cleanup function
      return () => clearInterval(interval) 
    }
  }, [run, count]) // dependencies

  // data returned by hook to be used in component
  return { count, reset, stop, start }
}

export default useTimer
