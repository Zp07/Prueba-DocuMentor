import { Link } from "react-router-dom"
import GoogleLogo from '../../assets/GoogleLogo.png'
import './Auth.css'

export default function Login () {
    return (
        <main className="container">
            <div className="content">
                <h2>Log in an Account</h2>
                <h3>Enter yout email to log in for this app</h3>
                <form action="" className="form">
                    <div className="input-group">
                        <input type="email" id='email' name="email" placeholder="email123@gmail.com"/>
                    </div>

                    <div className="input-group">
                        <input type="password" name="password" id="password" placeholder="password" />
                    </div>

                    <div className="container-button">
                        <button type="submit" className="button-email">Log in with Email</button>
                    </div>
                </form> 

                <div className="container-button">
                    <button className="button-google">
                    <img src={GoogleLogo} alt="Logo the google" />
                    <strong>Google</strong></button>
                </div>

                <div className="terms">
                    <p>By clicking continue, you agree to our <Link to='/terms'> Terms of Service and Privacy Policy </Link></p>
                </div>
            </div>
        </main>
    )
}