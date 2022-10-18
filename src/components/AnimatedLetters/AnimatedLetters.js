import './AnimatedLetters.scss'
import {useState, useEffect} from 'react'

const AnimatedLetters = ({stringArray, index, delay}) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, delay)
  }, [delay])
  return (
    <span>
      {stringArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export {AnimatedLetters}
