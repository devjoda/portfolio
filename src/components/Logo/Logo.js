import LogoS from '../../static/images/svg/logo/logo-s.svg'
import './Logo.scss'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={LogoS} alt='logo' />
    </div>
  )
}

export {Logo}
