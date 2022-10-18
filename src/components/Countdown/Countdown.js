import {useState, useEffect} from 'react'

const Countdown = ({prependText, delay}) => {
  const [counter, setCounter] = useState(delay / 1000)

  useEffect(() => {
    counter > 1 && setTimeout(() => setCounter(counter - 1), 1000)
  }, [counter])

  return (
    <h1>
      {prependText} {counter}s
    </h1>
  )
}

export {Countdown}
