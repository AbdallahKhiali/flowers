import React from 'react'
import "../styles/Footer.css"
const Footer = () => {
    return (
        <footer className="footer" >
            <h2>Find me : work.khiali@gmail.com </h2>
            <textarea name="message" id="message" cols="30" rows="10" className='footer-message' ></textarea>
            <div className="footerButton" >
                send
            </div>
        </footer>
    )
}

export default Footer