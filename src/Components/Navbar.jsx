import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [show , setShow] = useState(false);

    function menuHandle(){
      setShow(!show)
    }
  return (
    <>
          {/* Header */}
          <header id="header" className="alt">
          <a href="https://alphanitesofts.com/" className="logo" target="_blank">
            <strong>Viewfy</strong> <span>by AlphaniteSofts</span>
          </a>
          {/* Menu */}

          <nav className="side-nav-menu ">
            <button className="mt-2" style={{ marginRight: show === false? "0.5em": "-6em" }} onClick={menuHandle}>Menu</button>
          {
            show &&
            <ul>
            <li>
              <Link to="/" style={{ marginTop: "3.5em" }}>
                <i className="fas fa-home"></i>               
              </Link>
            </li>

            <li>
              <Link to="/AboutUS">
                <i className="fas fa-file"></i>
              </Link>
            </li>

            <li>
              <Link to="/HowToOperate">
                <i className="fas fa-gear"></i>
              </Link>
            </li>

            <li>
              <Link to="/Packages">
                <i className="fas fa-box-open"></i>
              </Link>
            </li>
          </ul>
     
          }
          

          </nav>
        </header>
   
    </>
  )
}

export default Navbar