import React from "react";
import { IoIosMail }  from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { FaBasketball } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import wp1 from './assets/wp1.png'
import family from './assets/family.jpg'
import money_machine from './assets/money_machine.PNG';
import liquid from './assets/liquid.PNG';
import follow from './assets/follow.PNG';
import drop from './assets/drop.PNG';
import synar from './assets/synar.PNG';
import build1 from './assets/build1.PNG';
import build2 from './assets/build2.PNG';
import build3 from './assets/build3.PNG';
import { PiMapPinPlusFill } from "react-icons/pi";
import rv from './assets/rv.PNG';
import reviews from './review';
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import b1 from './assets/b1.jpg';
import b2 from './assets/b2.jpg';
import b3 from './assets/b3.jpg';
import rd from './assets/rd.jpg'




function RealEstate ()
{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2400, 
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className="container">

           <nav className="n1">
            <div className="navbar1">
                <ul className="contact_nav">
                    <li><a href="#"> < IoIosMail className="mail-icon"/> sample@sample.com </a></li>
                    <li> <a href="#"> <LuPhoneCall className="phone-icon"/> 00 1234 5678 </a>

                    </li>
                </ul>


                <ul className="social_nav">
                <li><a href="#"> < FaGooglePlus className="social-icon"/>  </a></li>
                <li><a href="#"> <FaPinterest className="social-icon"/>   </a></li>
                <li><a href="#"> < AiFillTwitterCircle className="social-icon"/> </a></li>
                <li><a href="#"> < IoLogoFacebook className="social-icon"/>  </a></li>
                <li><a href="#"> < FaBasketball className="social-icon"/>  </a></li>

                </ul>

            </div>

           </nav>
           <nav className="n2">
            <div className="second__navbar">
                <div >
                    <img src={wp1} className="wp_logo"/>
                </div>

                <ul className="menu__list">
                    <li><a href="#"> HOME </a></li>
                    <li><a href="#">ABOUT </a></li>
                    <li><a href="#"> AGENTS </a></li>
                    <li><a href="#"> PROPERTIES </a></li>
                    <li><a href="#"> BLOG </a></li>
                    <li><a href="#"> CONTACT </a></li>
                </ul>

                

                
            </div>
           </nav>

           <div className="carousel__image">
            <img src={family}/>

           </div>
           
           <ul className="vendors">
            <li> <img src={money_machine} />  </li>
            <li> <img src={liquid} />  </li>
            <li> <img src={synar} />  </li>
            <li> <img src={drop} />  </li>
            <li> <img src={follow} />  </li>
           </ul>
           <div className="logo__middle">
            <img src={wp1}></img>
           </div>

           <h1>Properties</h1>

           <h5>HOME  FOR  SALE</h5>

          <div className="big__image"> <img src={build1} /> </div>

           
            
            <div className="small__Images">
               <a href="#"><img src={build1} /> <h4>Scandinavian style apartment </h4><p>94-98 lingraham st, Brooklyn NY 112233, USA</p></a> 
               <a href="#"><img src={build2} /> <h4>Scandinavian style apartment </h4><p>94-98 lingraham st, Brooklyn NY 112233, USA</p></a> 
               <a href="#"><img src={build3} /> <h4>Scandinavian style apartment </h4><p>94-98 lingraham st, Brooklyn NY 112233, USA</p></a> 
            </div>

            <hr></hr>

           <div className="viewmore">
           <i><PiMapPinPlusFill className="pin"/></i>
           <p>View More</p>
           </div> 

           <img src={rv} className="rv__image"/>

           <div className="client__Reiview">
            <h4>Our</h4> <h2>Clients Review</h2>
           </div>

           <Slider {...settings}>
           
            {reviews.map(review =>(
                <div className="card">
            <div className="card-top">
                <img src={review.image}/>
                <h5>{review.name}</h5>

            </div>
            <div className="card-bottom"> 
                <p>" {review.review} "</p>
            </div>


           </div>) )}
          
           </Slider>

           <div className="blog">
            <h4>Our</h4> <h2>Blog</h2>
           </div>

           <div className="blog__Items">
            <div className="image__container">
                <div className="left__image">
                <img src={b1}/>
                <div className="text-overlay"><h3 style={{color:"white", fontSize:'20px',width:'300px'}}>Nice Lake view 
                    appartment with the tent and fishing boat and scooter</h3>

                    <hr style={{width:"150px"}}></hr>
                    <p className="date">13 March 2020</p>

                    <p style={{color:'white',fontSize:'10px'}}>Content to be verified by the owner of the page and client also 
                        flower decores are beautifull to watch 
                    </p>
                    
                    </div>
                    </div>

           </div>

           <div className="image__container2">

           <div className="sub__Image">
           <div className="simage">
           <img src={b1} className="image__b2"/>
                <div className="text-overlay__2"><h3 >Nice Lake view 
                    appartment with the tent and boat </h3>

                    <hr style={{width:"100px"}}></hr>
                    <p className="date">13 March 2020</p>

                    
                    
                    </div>
                    </div>

                    <div className="simage">
           <img src={b3} className="image__b2"/>
                <div className="text-overlay__2"><h3 >Nice Lake view 
                    appartment with the tent and boat </h3>

                    <hr style={{width:"100px"}}></hr>
                    <p className="date">13 March 2020</p>

                    
                    
                    </div>
                    </div>


                    </div>

                    <div className="sub__Image">
           <div className="simage">
           <img src={b3} className="image__b2"/>
                <div className="text-overlay__2"><h3 >Nice Lake view 
                    appartment with the tent and boat </h3>

                    <hr style={{width:"100px"}}></hr>
                    <p className="date">13 March 2020</p>

                    </div>
                    </div>

                    <div className="simage">
           <img src={b2} className="image__b2"/>
                <div className="text-overlay__2"><h3 >Nice Lake view 
                    appartment with the tent and boat </h3>

                    <hr style={{width:"100px"}}></hr>
                    <p className="date">13 March 2020</p>
   </div>
                    </div>

                    </div>
           </div>
           
        </div>

        <div className="s__area">
            <h2>Every thing is about to change.</h2>
            <p>Future  is  sustainable developments, urbanization, flexible living spaces, and increased investment opportunities driven by evolving lifestyle and environmental priorities.
             </p>

            <div className="search_bar"> <input type="email" placeholder="Email Address" /> 
            <button className="button">SUBSCRIBE</button></div>

        </div>

        <img src={rd} className="rd__image"/>

        <div className="bottom__logo"> <h3>wp</h3> <h4>Real Estae</h4></div>
    




        </div>
    )
}
export default RealEstate