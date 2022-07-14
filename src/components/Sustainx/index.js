import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      return (location.href = 'https://devjoda.github.io/sustainx/')
    }, 2000)
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

export default About
