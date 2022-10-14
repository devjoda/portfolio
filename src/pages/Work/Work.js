import React, {useState} from 'react'
import Loader from 'react-loaders'
import {AnimatedLetters} from '../../components/AnimatedLetters/AnimatedLetters'
import './Work.scss'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </>
  )
}

export {Work}
