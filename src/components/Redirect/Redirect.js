import {useEffect} from 'react'
import Loader from 'react-loaders'
import {Countdown} from '../Countdown/Countdown'

const Redirect = ({url, delay}) => {
  useEffect(() => {
    setTimeout(() => {
      return (window.location.href = url)
    }, delay)
  }, [delay, url])

  return (
    <>
      <div className='container redirect-page'>
        <div className='text-zone'>
          <Countdown prependText='Redirecting in' delay={delay} />
          <p>Please hold...</p>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </>
  )
}
export {Redirect}
