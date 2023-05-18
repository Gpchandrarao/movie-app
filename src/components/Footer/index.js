import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <div>
        <button type="button" className="icon-buttons">
          <FaGoogle />
        </button>
        <button type="button" className="icon-buttons">
          <FaTwitter />
        </button>
        <button type="button" className="icon-buttons">
          <FaInstagram />
        </button>
        <button type="button" className="icon-buttons">
          <FaYoutube />
        </button>
      </div>
      <div className="contact-container">
        <p className="contact-us-footer ">Contact us</p>
      </div>
    </div>
  </>
)

export default Footer
