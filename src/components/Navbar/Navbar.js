import {Link, NavLink} from 'react-router-dom'
import './Navbar.scss'
import LogoS from '../../static/images/svg/logo/logo-s.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBriefcase,
  faUser,
  faEnvelope,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {useState} from 'react'

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false)

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
          exact='true'
          activeclassname='active'
          className='work-link'
          to='/work'>
          <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
        </NavLink>
        <NavLink
          exact='true'
          activeclassname='active'
          className='about-link'
          to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
          exact='true'
          activeclassname='active'
          className='contact-link'
          to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        {burgerActive ? (
          <FontAwesomeIcon
            className='burger close'
            icon={faXmark}
            color='var(--accent-1)'
            onClick={() => setBurgerActive(!burgerActive)}
          />
        ) : (
          <FontAwesomeIcon
            className='burger open'
            icon={faBars}
            color='var(--accent-1)'
            onClick={() => setBurgerActive(!burgerActive)}
          />
        )}
      </nav>
      {burgerActive ? (
        <nav className='mobile'>
          <NavLink exact='true' to='/' onClick={() => setBurgerActive(false)}>
            <FontAwesomeIcon icon={faHome} color='var(--accent-1)' />
            <span>Home</span>
          </NavLink>
          <NavLink
            exact='true'
            className='work-link'
            to='/work'
            onClick={() => setBurgerActive(false)}>
            <FontAwesomeIcon icon={faBriefcase} color='var(--accent-1)' />
            <span>Work</span>
          </NavLink>
          <NavLink
            exact='true'
            className='about-link'
            to='/about'
            onClick={() => setBurgerActive(false)}>
            <FontAwesomeIcon icon={faUser} color='var(--accent-1)' />
            <span>About</span>
          </NavLink>
          <NavLink
            exact='true'
            className='contact-link'
            to='/contact'
            onClick={() => setBurgerActive(false)}>
            <FontAwesomeIcon icon={faEnvelope} color='var(--accent-1)' />
            <span>Contact</span>
          </NavLink>
        </nav>
      ) : null}
      <ul>
        <li>
          <a
            title='GitHub'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/devjoda'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            title='CodeSandbox'
            target='_blank'
            rel='noreferrer'
            href='https://codesandbox.io/u/devjoda'>
            <svg
              width='18px'
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z' />
            </svg>
          </a>
        </li>
        <li>
          <a
            title='LinkedIn'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/devjoda/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export {Navbar}
