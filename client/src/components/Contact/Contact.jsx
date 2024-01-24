import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>SAY HELLO TO US</span>
            <div className="mail">
                <input type="text" className="text" placeholder='Enter your e-mail'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <PinterestIcon/>
                <YouTubeIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact