import LogoTitle from '../../static/images/svg/logo/logo-s.svg'
import {Link} from 'react-router-dom'
import {AnimatedLetters} from '../../components/AnimatedLetters/AnimatedLetters'
import './Home.scss'
import {Logo} from '../../components/Logo/Logo'
import Loader from 'react-loaders'

const Home = () => {
  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              stringArray={'Hi,'.split('')}
              index={15}
              delay={1000}
            />
            <br />
            <AnimatedLetters
              stringArray={"I'm".split('')}
              index={15}
              delay={2000}
            />
            <img src={LogoTitle} alt='developer' />
            <AnimatedLetters
              stringArray={'oachim,'.split('')}
              index={15}
              delay={3000}
            />
            <br />
            <AnimatedLetters
              stringArray={'web developer'.split('')}
              index={15}
              delay={4000}
            />
          </h1>
          <p>Currently looking for frontend and full stack opportunities</p>
          <Link className='flat-button' to='/work'>
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
