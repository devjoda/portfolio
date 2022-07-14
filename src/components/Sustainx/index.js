import './index.scss'
import Loader from 'react-loaders'
import { useEffect } from 'react'

const Sustainx = () => {
  useEffect(() => {
    setTimeout(() => {
      return (window.location.href = 'https://devjoda.github.io/sustainx/')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container sustainx-page'>
        <div className='text-zone'>
          <h1>Redirecting</h1>
          <p>Please hold...</p>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </>
  )
}

export default Sustainx
