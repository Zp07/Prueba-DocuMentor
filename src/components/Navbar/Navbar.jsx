import { Link } from 'react-router-dom'
import Logo from '../../../public/Logo.png'
import './Navbar.css'

const LogoWeb = Logo 

export default function Navbar() {
    return (
        <nav className="navbar">    
            <div className='navbar-logo'>
                <img src={LogoWeb} alt="Logo" className='logo-image'/>
                <span>
                    <Link to='/' className='navbar-title'>DocuMentor</Link>
                </span>
            </div>  

            <div className='navbar-links'>
                    <a href="/register">Sign Up</a>
                    <a href="/login">Login</a>
                    <Link to='/home' className='button-getStarted'>Get Started</Link>
            </div>
        </nav>
    )
}