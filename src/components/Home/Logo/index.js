import LogoS from '../../../assets/images/logo-s.svg'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={LogoS} alt="logo" />
    </div>
  )
}

export default Logo
