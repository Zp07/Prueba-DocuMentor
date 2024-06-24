import { Link } from 'react-router-dom'
import Logo from '../../../public/Logo.png'
import './Navbar.css'

const LogoWeb = Logo 

export default function NavbarAuth() {
    return (
        <nav className="navbar">    
            <div className='navbar-logo'>
                <img src={LogoWeb} alt="Logo" className='logo-image'/>
                <span>
                    <Link to='/' className='navbar-title'>DocuMentor</Link>
                </span>
            </div>  

            <div className='navbar-links'>
                    <a href="/home">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/board">Board</a>
                    <Link to='/upload' className='button-Upload'>Upload</Link>
            </div>
        </nav>
    )
}