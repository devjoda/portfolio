import LogoS from '../../assets/images/logo-s.svg'
import './Logo.scss'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={LogoS} alt='logo' />
    </div>
  )
}

export {Logo}
