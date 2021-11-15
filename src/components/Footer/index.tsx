import facebookIcon from '../../assets/icon-facebook.svg'
import instagramIcon from '../../assets/icon-instagram.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'

import './styles.scss'
export function Footer(){
    return(
        <footer>
            <h3>sunnyside</h3>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <ul className="icons">
                <li><a href="#"><img src={facebookIcon} alt="Facebook link" /></a></li>
                <li><a href="#"><img src={instagramIcon} alt="Instagram Link" /></a></li>
                <li><a href="#"><img src={twitterIcon} alt="Twitter Link" /></a></li>
                <li><a href="#"><img src={pinterestIcon} alt="Pinterest Link" /></a></li>
            </ul>
        </footer>
    )

}