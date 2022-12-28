import { useEffect, useState } from "react";

function useFetch(url, body) {
  const [data, setData] = useState(null) // data returned from API
  const [error, setError] = useState(null) // error returned from network call
  const [loading, setLoading] = useState(false) // can be used to trigger spinners, loading bar, etc.

  useEffect(() => {
    const controller = new AbortController() // https://developer.mozilla.org/en-US/docs/Web/API/AbortController

    // fancy way to run an anonymous async function immediately
    ;(async () => {
      try {
        // set initial state
        setLoading(true)
        setError(null)

        // fetch JSON data from API
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          signal: controller.signal, // this is how we trigger cancellation
        })

        // parse JSON data
        const json = await response.json()
        setData(json)
        setError(null)

      } catch (error) {
        // handle errors
        setData(null)
        setError(error)

      } finally {
        // always remember to update the UI
        setLoading(false)
      }
    })()

    // cleanup function, runs whenever dependencies change before new effect is run
    return () => controller.abort() 
  }, [url, body]) // dependencies

  // data returned by the hook to be used in component
  return {
    data,
    error,
    loading,
  }
}

export default useFetch