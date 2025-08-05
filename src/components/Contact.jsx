import { FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa6';
import './Contact.css';


const Contact = ()=>{
    return(
        <div className="contact-section">
            <h1>Let's Connect & Create Something Cinematic.</h1>
            <div className="contact-box">

                <div className="quick-contact">
                    <h2>Quick Contact</h2>
                    <div className="contact-options">

                        <div className="contact-card">
                            <div className="icon-wrapper">
                                <FaEnvelope />
                            </div>
                            <div className="contact-details">
                                <p className='contact-lable'>E-mail:</p>
                                <p className="contact-info"><a href="">raccoonlabs.io@email.com</a></p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="icon-wrapper">
                                <FaWhatsapp />
                            </div>
                            <div className="contact-details">
                                <p className='contact-lable'>WhatsApp</p>
                                <p className="contact-info"><a href="">+94 764676820</a></p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="icon-wrapper">
                                <FaTelegram />
                            </div>
                            <div className="contact-details">
                                <p className='contact-lable'>Telegram</p>
                                <p className="contact-info"><a href="">+94 764676820</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="social-media">
                    <h3>Other Contact Links:</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact;