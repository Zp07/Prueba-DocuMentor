import UserLogo from '../../assets/icons/user.png'
import './Card.css'

export default function Card({ documentName, author, description }){
    return (
        <section className='card-content'>
            <div className='card'>
                <div className='card-image'>
                    <img src={UserLogo} alt="logo users use with example" />
                </div>

                <div className='card-details'>
                    <h3>{documentName}</h3>
                    <p>{author}</p>
                    <p>{description}</p>
                    <a href="#" className='card-link'>{documentName}</a>
                </div>
            </div>
        </section>
    )
}