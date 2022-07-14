import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container work-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            stringArray={['W', 'o', 'r', 'k']}
            index={15}
          />
        </h1>
        <p>
          Here you can find some of my latest projects. The source code is
          hosted on my <a href="https://github.com/devjoda">GitHub</a>.
        </p>
      </div>
      <div className="work">
        <a
          href="https://devjoda.github.io/sustainx"
          target="_blank"
          rel="noreferrer"
          className="card"
        ></a>
        <a
          href="https://devjoda.github.io/internship-portfolio"
          target="_blank"
          rel="noreferrer"
          className="card"
        ></a>
        <a
          href="https://devjoda.github.io/peepfeed"
          target="_blank"
          rel="noreferrer"
          className="card"
        ></a>
      </div>
      <Loader type="line-scale-pulse-out" color="#e87042" />
    </div>
  )
}

export default Work
