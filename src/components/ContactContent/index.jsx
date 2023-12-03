import React from 'react'
import "./index.scss";
const ContactContent = () => {
    return (
        <>
            <section id='contact'>
                <div className='contact_content'>
                    <div className='contact_map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350802.3958431348!2d13.822379219392035!3d37.489461230248686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1310c261e52ae8a3%3A0x455ddc54ef3d967f!2s93100%20Caltanissetta%2C%20Free%20municipal%20consortium%20of%20Caltanissetta%2C%20%C4%B0taliya!5e0!3m2!1saz!2saz!4v1701590378559!5m2!1saz!2saz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact_mail'>
                        <div className='contact_mail_left'>
                            <div className='contact_mail_left_item'>
                            <i className="fa-solid fa-house"></i>
                            <div className='contact_mail_left_item_text'>
                                <h6>California, United States</h6>
                                <p>Santa monica bullevard</p>
                            </div>
                            </div>
                            <div className='contact_mail_left_item'>
                            <i class="fa-solid fa-phone"></i>
                            <div className='contact_mail_left_item_text'>
                                <h6>00 (440) 9865 562</h6>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div>
                            </div>
                            <div className='contact_mail_left_item'>
                            <i class="fa-solid fa-envelope"></i>
                            <div className='contact_mail_left_item_text'>
                                <h6>support@colorlib.com</h6>
                                <p>Send us your query anytime!</p>
                            </div>
                            </div>
                        </div>
                        <div className='contact_mail_right'>
                            <div className='contact_mail_right_top_left'>
                                <input type="text" placeholder='Enter your name' />
                                <input type="text" placeholder='Enter email address'/>
                                <input type="text" placeholder='Enter Subject' />
                            </div>
                            <div className='contact_mail_right_top_right'>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
                            </div>
                            <div className='contact_mail_right_bottom'>
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactContent