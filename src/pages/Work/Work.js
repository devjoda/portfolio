import React from 'react'
import Loader from 'react-loaders'
import './Work.scss'
import {AnimatedLetters} from '../../components/AnimatedLetters/AnimatedLetters'
import {Swiper, SwiperSlide} from 'swiper/react'
import sustainx from '../../static/images/sustainx.png'
import peepfeed from '../../static/images/peepfeed.png'
import portfolio from '../../static/images/portfolio.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/bundle'

// import required modules
import {EffectCoverflow, Pagination} from 'swiper'

const Work = () => {
  return (
    <>
      <div className='container work-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              delay={2500}
              stringArray={'Work'.split('')}
              index={15}
            />
          </h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              500: {
                width: 500,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                spaceBetween: 10,
                slidesPerView: 2,
              },
              1440: {
                width: 1440,
                spaceBetween: 10,
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'>
            <SwiperSlide>
              <a href='https://devjoda.github.io/sustainx'>
                <img src={sustainx} alt='app' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='https://devjoda.github.io/peepfeed'>
                <img src={peepfeed} alt='app' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='https://devjoda.github.io/internship-portfolio'>
                <img src={portfolio} alt='app' />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </>
  )
}

export {Work}
