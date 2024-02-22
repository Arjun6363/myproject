import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet,FaInstagram,FaFacebookSquare ,FaTelegram ,FaTwitter} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                        
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Save more, get more</p>
                    </div>
                </div>
                    <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>free delivery</h3>
                        <p>Get free home delivery</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>24X7 support</h3>
                        <p>Get support from us</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>money back</h3>
                        <p>Get 100% cashback</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    {/* <img src='image/logo.webp' alt=''></img> */}
                    <h1>𝓞𝓯𝓯𝓲𝓬𝓮 𝓗𝓮𝓻𝓸𝓮'𝓼</h1>
                    <p>GPT Limited INC.</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Oder</li>
                            <li>New product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>contact us</h3>
                        <ul>
                            <li>GPT Vijayapur</li>
                            <li>+91 6363636363</li>
                            <li>gpt@gmail.com</li>
                        </ul>
                    </div>
                
                </div>
                <div className='social-icons'>
              <a href='https://instagram.com/thenameistahirhussain?igshid=MzRlODBiNWFlZA=='>  <FaInstagram className='insta'/></a>
              <a href='https://www.facebook.com/tahir.fathepur.1?mibextid=ZbWKwL'> <FaFacebookSquare className='facebook' /></a> 
             <a href='https://twitter.com/thenameistahir?t=tFVTIYTnFtiYh2qOW4LIHA&s=09'> <FaTwitter /></a>
                </div>
            </div>
            </div>
          
        </div>
    </>
  )
}

export default Footer


