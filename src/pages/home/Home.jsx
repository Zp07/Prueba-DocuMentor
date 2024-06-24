import { Link } from 'react-router-dom'
import Oportunity from '../../components/oportunity/Oportunity'
import ImgHome from '../../assets/img/board.png'
import NavbarAuth from '../../components/Navbar/NavbarAuth'
import Footer from '../../components/Footer/Footer'
import './Home.css'

export default function Home () {
    return (
        <>
            <NavbarAuth />
            <main className="containerHome">
                <div className='container-upload'>
                    <h2>Comparte tu conocimiento</h2>
                    <Link to='/upload'>Upload</Link>
                </div>
                
                <section className='home-content'>
                    <article className='home-text'>
                        <h3>Board</h3>
                        <p>A new board functions is intregate in web site, now your verify documents its in real time, share oppinions with your teachers, and proffessionals</p>
                        <Link to='board' className='link-board'>click and visit the new update</Link>
                    </article>

                    <article className='home-img-container'>
                        <img 
                        src={ImgHome} 
                        alt="Representate a new feature board"
                        className='home-img'
                        />
                    </article>
                </section>
                
                <Oportunity />
                <Footer /> 
            </main>
        </>
        
    )
}