import OnBourdingImg from '../../assets/OnBourdingImg.png'
import { Link } from 'react-router-dom'
import './onBourding.css'

const Img = OnBourdingImg

export default function OnBourding () {    
    return (
            <main className='onBourding-main'>
                <section className='onBourding-content'>
                    <article className='onBourding-text'>
                        <h1>Your research is the future.</h1>
                        <p>Connect with expert writers to impr  ove your academic documents. Receive professional feedback and achieve your academic goals with ease</p>    
                        <Link to='/home' className='button-getStarted'>Get Started</Link>
                    </article>

                    <article className="onBourding-img-container">
                        <img 
                        src={Img} 
                        alt="Image showing access to knowledge" 
                        className='onBourding-img'
                        />
                    </article>
                </section>
            </main>
    )
}