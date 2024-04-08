import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsChevronCompactDown } from "react-icons/bs";
import './index.css'
const Footer=()=>(
    <div className="footer-container">
        <div className='footer-con-2'>
            <div className='footer-card1'>
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Sign up for updates from metta muse</p>
            <div>
                <input type="text" className='input' placeholder='ENTER YOUR EMAIL'/>
                <button className='button-subscribe'>SUBSCRIBE</button>
               </div>
                </div>
                <div className='footer-card2'>
                    <h1>CONTACT US</h1>
                    <p> +442211335360</p>
                    <p>customercare@mettamuse.com</p>
                    <h1>Currency</h1>
                    <div className='flag-con'>
                    <img src='https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg' className='flag' alt='american-flag'/>
                    <p className='usd-name'>. USD</p>
                    </div>
                    <p>Transactions will be completed in Euros and a currency<br/> reference is available on hover.</p>
            
                </div>
                </div>  
                <hr className='line-break'/>
                <div className='footer-line-break-after-con'>
                    <div className="metta-heading">
                        <h1>mettā muse</h1>
                        <BsChevronCompactDown className="drop-down"/>
                        <ul className='metta-muse-item'>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact US</li>
                        <li>EU Complicances</li>
                        </ul>
                        
                    </div>
                    <div className="quick-link">
                        <h1>QUICKLINKS</h1>
                   <BsChevronCompactDown className="drop-down"/>

                     
                        <ul className='quick-link-items'>
                            <li>Orders & Shipping </li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Pricing</li>
                            <li>Return & Refunds</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>

                        </ul>
                    </div>
                    <div>
                        <div className="follow-us">
                        <h1>FOLLOW US</h1>
                        <BsChevronCompactDown className="drop-down"/>
                        </div>
                        
                        <div className="insta-linkedean-icon-con">
                        <div className="insta-icon-con">
                     <RiInstagramFill className="insta-icon"/>
                        </div>
                        <div className="insta-icon-con">
                     <FaLinkedin className="insta-icon"/>
                        </div>
                        </div>
                        <div>
                        <h1>metta muse ACCEPTS</h1>
                        <img src='https://cdn.iconscout.com/icon/free/png-256/free-google-pay-3628807-3030084.png?f=webp' alt="g-pay" className="upi-img"/>
                    <img src='https://static-prod.adweek.com/wp-content/uploads/2019/01/mastercard-new-logo-content-2019.jpg' alt='master-card' className="upi-img"/>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZtczuEjz6iB7dHKqX3EuFQrOr7tWhtJUerqa2WxzeA&s' alt="pay-app" className="upi-img"/>
                    <img src='https://w7.pngwing.com/pngs/868/55/png-transparent-logo-american-express-cards-bank-insurance-bank-blue-text-rectangle-thumbnail.png' alt='amex' className="upi-img"/>
                    <img src='https://applepaydemo.apple.com/static/img/og_image.png' alt="apple-pay" className="upi-img"/>
                    <img src='https://opaypk.com/assets/img/footer-logo.png' alt="pay" className="upi-img"/>
                    </div>
                    </div>

                </div>
    
        </div>


    )

export default Footer