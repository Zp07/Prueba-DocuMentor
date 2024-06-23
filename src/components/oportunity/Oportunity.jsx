import WorldLogo from '../../assets/world.png'
import AccountLogo from '../../assets/account.png'
import SecureLogo from '../../assets/secure.png'
import  CalendarLogo from '../../assets/calendar.png'
import './Oportunity.css'

export default function Oportunity() {
    return (
        <>
          <section className='oportunity-section'>
                <h3>Oportunity</h3>
                <div className='oportunity-grid'>
                    <div className='oportunity-items'>
                        <img 
                        src={WorldLogo} 
                        alt="Logo for the explain features the web"
                        className='oportunity-logo'
                        />
                        <h4>Top global proffessionals</h4>
                        <p>The best proffessional recommended DocuMentor for  os original</p>
                    </div>

                    <div className='oportunity-items'>
                        <img 
                        src={AccountLogo} 
                        alt="Logo for the explain features the web"
                        className='oportunity-logo'
                        />
                        <h4>The account</h4>
                        <p>The account access a other persons</p>
                    </div>

                    <div className='oportunity-items'>
                        <img 
                        src={SecureLogo} 
                        alt="Logo for the explain features the web"
                        className='oportunity-logo' 
                        />
                        <h4>Secure</h4>
                        <p>The documentation is secure with us</p>
                    </div>

                    <div className='oportunity-items'>
                        <img 
                        src={CalendarLogo} 
                        alt="Logo for the explain features the web" 
                        className='oportunity-logo'
                        />
                        <h4>Calendar</h4>
                        <p>Separate your date with revision with professional</p>
                    </div>
                </div>
            </section>
        </>
    )
}