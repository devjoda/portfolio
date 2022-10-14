import './Work.scss'
import Loader from 'react-loaders'
import {useState, useEffect} from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className='container work-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            stringArray={['W', 'o', 'r', 'k']}
            index={15}
          />
        </h1>
        <p>
          Here you can find some of my latest projects. The source code is
          hosted on my <a href='https://github.com/devjoda'>GitHub</a>.
        </p>
      </div>
      <div className='work'>
        {/* <a
          href='https://devjoda.github.io/sustainx'
          target='_blank'
          rel='noreferrer'
          className='card'></a>
        <a
          href='https://devjoda.github.io/internship-portfolio'
          target='_blank'
          rel='noreferrer'
          className='card'></a>
        <a
          href='https://devjoda.github.io/peepfeed'
          target='_blank'
          rel='noreferrer'
          className='card'></a> */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...{' '}
        </Swiper>
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </div>
  )
}

export default Work
