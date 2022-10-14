import './About.scss'
import {AnimatedLetters} from '../../components/AnimatedLetters/AnimatedLetters'
import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faFigma,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={['About me'.split('')]}
              index={15}
            />
          </h1>
          <p>
            I'm an ambitious web developer looking for frontend and full stack
            opportunities. I build solid and scalable solutions with great user
            experiences. I have a passion for all things technology and design,
            from web development to UI/UX.
          </p>
        </div>

        <div className='stage-cube-container'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faHtml5} color='#F16524' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faCss3} color='#2465F1' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faJsSquare} color='#F8DC3D' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#61DAFB' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faGitAlt} color='#E84E31' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faFigma} color='#9D56F7' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </>
  )
}

export {About}
