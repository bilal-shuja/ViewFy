import React from "react";
import pic9 from '../images/pic09.jpg';

const Packages = () => {
  return (
    <>
      <div id="wrapper">
        <section id="banner" className="style2 mt-1 mb-5">
          <div className="inner">
            <span className="image">
              {/* <img src="images/pic07.jpg" alt /> */}
            </span>
            <header className="major">
              <h1>Our Packages List</h1>
            </header>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet nullam consequat
                <br />
                sed veroeros. tempus adipiscing nulla.
              </p>
            </div>
          </div>
        </section>
        {/* Main */}
        <div id="main">
          {/* One */}


          <div className="row p-4">

        <div className="col-lg-4 gy-2">
          <div className="card " style={{backgroundColor:"#242943" , border:"4px solid white"}}>
            <div  className="image d-flex align-self-center mt-3 mb-3">
                <i className="fas fa-paper-plane icon-one" style={{fontSize:"3em"}}></i>
            </div>
                <h3 className="text-center">"Basic Package"</h3>
            <hr className="w-75 d-block mx-auto"/>
            <div className="text-center">
                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>Operate able in "1" device</h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>Videos: <b>Unlimited</b> </h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>Subscription: <b>Lifetime</b> </h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>price: <b>950 PKR</b> </h3>
                </div>

            </div>
       
            </div>
        
            </div>

            <div className="col-lg-4 gy-2">

                 <div className="card " style={{backgroundColor:"#242943" , border:"4px solid white"}}>
            <div  className="image d-flex align-self-center mt-3 mb-3">
                <i className="fas fa-star icon-two" style={{fontSize:"3em"}}></i>
            </div>
            <h3 className="text-center">"Standard Package"</h3>

            <hr className="w-75 d-block mx-auto"/>
            <div className="text-center">
                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2 "></i>
                  <h3>Operate able in "2" device</h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2 mb-4"></i>
                  <h3>Videos: <b>Unlimited</b> </h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>Subscription: <b>Lifetime</b> </h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>price: <b>2000 PKR</b> </h3>
                </div>
            </div>
       
            </div>
              
      
            </div>

            <div className="col-lg-4 gy-2">
             <div className="card" style={{backgroundColor:"#242943" , border:"7px solid white"}}>
            <div  className="image d-flex align-self-center mt-3 mb-3">
                <i className="fas fa-wand-magic-sparkles icon-three" style={{fontSize:"3em"}}></i>
            </div>
            <h3 className="text-center">"Premium Package"</h3>

            <hr className="w-75 d-block mx-auto"/>
            <div className="text-center">
                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>Operate able in "4" device</h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>Videos: <b>Unlimited</b> </h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>Subscription: <b>Lifetime</b> </h3>
                </div>

                <div className="d-flex justify-content-center mb-4">
                <i className="fa-solid fa-check-double mt-2 me-2"></i>
                  <h3>price: <b>3000 PKR</b> </h3>
                </div>
            </div>
       
            </div> 
            </div>
           
          </div>

        </div>
      </div>
    </>
  );
};

export default Packages;
