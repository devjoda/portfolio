import LogoTitle from '../../assets/images/logo-s.svg'
import {Link} from 'react-router-dom'
import {AnimatedLetters} from '../../components/AnimatedLetters/AnimatedLetters'
import './Home.scss'
import {useEffect, useState} from 'react'
import {Logo} from '../../components/Logo/Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            <img src={LogoTitle} alt='developer' />
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={'oachim'.split('')}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={'web developer'.split('')}
              index={20}
            />
          </h1>
          <h2>Looking for frontend and full stack opportunities</h2>
          <Link to='/work' className='flat-button'>
            View work
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </>
  )
}

export {Home}
