import MainLogo from '../images/Viewfy.png';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';
import React from "react";

const Main = () => {


  return (
    <>
      <div id="wrapper">
      
        {/* Banner */}
        <section id="banner" className="major">
          <div className="inner">
            <img className="img-fluid" src={MainLogo} alt="" width={123} style={{marginTop:"-7em"}}/>
            <header className="major">
              <h1>Welcome,
              <Typewriter
                    options={{
                      strings: [
                        "to Viewfy 👋",
                        "Complete Watch hours 🕐",
                        "Start Earning ✨"
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              </h1>
           
            </header>
            <div className="content">
              <p>
              ViewFy - the Android app that lets you boost your 

                <br />
                YouTube views and gain more reach.
              </p>
              <ul className="actions">
                <li>
                  <a href="#one" className="button next scrolly">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one" className="tiles">
            <article>
              <span className="image">
                <img src="../images/pic01.jpg" alt />
              </span>
              <header className="major">
                <h3>
                  <a href="" className="link">
                  What is ViewFy?
                  </a>
                </h3>
                <p>ViewFy is a bot viewer app which works in all android devices. </p>
              <Link to="/AboutUS" target="_blank" className="button next mt-1">Click to View</Link>

              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic02.jpg" alt />
              </span>
              <header className="major">
                <h3>
                  <a href="" className="link">
                  How much does it cost ?
                  </a>
                </h3>
                <p>ViewFy is an Android-compatible bot viewer application that enables users to significantly increase the number of views on their YouTube videos.</p>
              <Link to="/Packages" target="_blank" className="button next mt-1">Click to View</Link>
              </header>

            </article>
            <article>
              <span className="image">
                <img src="images/pic03.jpg" alt />
              </span>
              <header className="major">
                <h3>
                  <a href="" className="link">
                  How to order viewFy App?
                  </a>
                </h3>
                <p>To acquire ViewFy, kindly reach out to us via the provided account and complete the payment process. Once payment has been confirmed, we will promptly furnish you with login details for the application.</p>
              <a href="https://api.whatsapp.com/send?phone=923206226173" target="_blank" className="button next mt-1">Click to Order</a>
              </header>

            </article>
            <article>
              <span className="image">
                <img src="images/pic04.jpg" alt />
              </span>
              <header className="major">
                <h3>
                  <a href="" className="link">
                    How to use this app?

                  </a>
                </h3>
                <p>For understanding working of this application please visit this page</p>
                <Link to="/HowToOperate" target="_blank" className="button next mt-1">
                  Click to view
                </Link>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic05.jpg" alt />
              </span>
              <header className="major">
                <h3>
                  <a href="" className="link">
                  Does it give Bot Views ?
                  </a>
                </h3>
                <p>Yes, it gives Super-Bot views which is considered as organic views by youtube's algorithm </p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic06.jpg" alt />
              </span>
              <header className="major">
                <h3>
                  <a href="" className="link">
                  Do we give customer support? 
                  </a>
                </h3>
                <p>We give lifetime support to our customers if they have any confusion about usage of application.</p>
                <a href="#two" className="button  scrolly mt-1 me-3">
                    Email Us
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=923206226173" className="button  scrolly mt-1" target="_blank">
                    Whatsapp
                  </a>
              </header>
            </article>
          </section>
          {/* Two */}
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>User Agreement</h2>
              </header>
              <p>
               Before using the ViewFy app, please ensure that you have a reliable and consistent internet connection. Additionally, remember to switch your VPN every time you access the stream screen. It is important to pay any outstanding charges within 12 hours of delivery to avoid any potential issues. To avoid any loss of views, we highly recommend that you watch the tutorial video provided at this link:  https://vimeo.com/819094336?share=copy . Please adhere to all of these terms to ensure a smooth and successful experience with the ViewFy app. Make sure that your video duration is bigger than 20 seconds and smaller than 60 seconds, make sure you change VPN precisely. Make sure you have stable and fast internet connection.  Failure to do so may result in us being unable to take responsibility for any views lost. 
              </p>
              <ul className="actions">
                <li>
                  <a href="#two" className="button next scrolly">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* Contact */}
      
    
      </div>
    </>
  );
};

export default Main;
