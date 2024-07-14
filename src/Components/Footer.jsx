import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import React,{  useRef} from 'react';


toast.configure()
const Footer = () => {
  const form = useRef();

  function sendMail(e){
    e.preventDefault();

    emailjs.sendForm('service_pmxpx4h', 'template_wtny5xp', form.current, '8B8PfEVHi9giu67TO')
    .then((result) => {
      toast('Message sent successfully!', {theme:"dark"})
    }, (error) => {
      toast.warn('Error while submitting data',{theme:"dark"})
    });
  e.target.reset()
   
  }
  return (
    <>
      <section id="contact">
          <div className="inner">
            <section>
              <form ref={form} onSubmit={sendMail}>
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"  />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Clear" />
                  </li>
                </ul>
              </form>
            </section>
            
            <section className="split">
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-envelope" />
                  <h3>Email</h3>
                  <a href="#">viewfy@alphanitesofts.com</a>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone" />
                  <h3>Phone</h3>
                  <a href="https://api.whatsapp.com/send?phone=923206226173" target="_blank" style={{cursor:"pointer"}}>(+92) 320-6226173</a>
                </div>
              </section>
              {/* <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home" />
                  <h3>Address</h3>
                  <span>
                    1234 Somewhere Road #5432
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States of America
                  </span>
                </div>
              </section> */}
            </section>
          </div>
        </section>
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              {/* <li>
                <a href="#" className="icon brands alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li> */}
              <li>
                <a href="https://www.facebook.com/people/Viewfy/100091728823037/" target="_blank" className="icon brands alt fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/viewfyofficial/?igshid=ZDdkNTZiNTM%3D" target="_blank" className="icon brands alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              {/* <li>
                <a href="#" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="icon brands alt fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li> */}
            </ul>
            <ul className="copyright">
              <li className="text-white">© All reserved rights</li>
              <li className="text-white">
                Design: <a href="https://alphanitesofts.com/" target="_blank">AlphaniteSofts pvt ltd</a>
              </li>
            </ul>
          </div>
        </footer>

    </>
  )
}

export default Footer