import FacebookLogo from '../../assets/icons/facebook.png'
import InstagramLogo from '../../assets/icons/instagram.png'
import TwitterLogo from '../../assets/icons/twitter.png'
import './Footer.css'

export default function Footer () {
    return (
        <footer className="footer-content">
            <div className='footer-top'>
            <h2>DocuMentor</h2>
            <p>&copy; {new Date().getFullYear()}</p>
            </div>

            <section className='footer-links'>
                <a href="https://facebook.com" target='_blank' rel='logo-face'>
                    <img src={ FacebookLogo } alt="facebook" className='social-icon' />
                </a>

                <a href="https://instagram.com" target='_blank' rel='logo-insta'>
                    <img src={ InstagramLogo } alt="instagram" className='social-icon' />
                </a>

                <a href="https://twitter.com" target='_blank' rel='logo-insta'>
                    <img src={ TwitterLogo } alt="twitter"  className='social-icon' />
                </a>
            </section>
        </footer>
    )
}