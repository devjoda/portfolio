import Loader from 'react-loaders'
import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {AnimatedLetters} from '../../components/AnimatedLetters/AnimatedLetters'
import './Contact.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_2hb106c',
        'template_vbjc5mj',
        form.current,
        'F8DFlHJ8o1ELHAVW0'
      )
      .then(
        () => {
          alert('Message successfully sent.')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              stringArray={'Contact me'.split('')}
              index={15}
              delay={2500}
            />
          </h1>
          <div className='text'>
            <p>Let's make something special </p>
            <FontAwesomeIcon icon={faRocket} color='#e87042' />
          </div>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder='Subject'
                    type='text'
                    name='subject'
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder='Message'
                    name='message'
                    required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='Send' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Joachim Danielsen
          <br />
          8700 Horsens
          <br />
          Denmark
          <br />
          <br />
          <a href='mailto:dev.joda@gmail.com'>
            <span className='highlight'>@</span>: dev.joda@gmail.com
          </a>
        </div>
        <div className='map-wrap'>
          <MapContainer
            zoomControl={false}
            center={[55.86132, 9.862748]}
            zoom={6}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[55.86132, 9.862748]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#e87042' />
    </>
  )
}

export {Contact}
