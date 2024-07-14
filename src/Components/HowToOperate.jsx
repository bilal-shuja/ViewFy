import React from "react";

const HowToOperate = () => {
  return (
    <>
      <div id="main" className="alt">
        {/* One */}
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>How to Operate</h1>
            </header>
            {/* Content */}
            <p>
            To use ViewFy App, follow these simple steps:
            </p>
            <div className="row">
              <div className="col-6 col-12-small border">
                <h3>Step 1:</h3>
                <p>
                First, download and install the ViewFy App on your device, and also install the VPN provided by ViewFy.
                </p>
              </div>
              <div className="col-6 col-12-small border">
                <h3>Step2:</h3>
                <p>
                Next, upload a short video to your YouTube channel and copy its link.
                </p>
              </div>
              {/* Break */}
              <div className="col-4 col-12-medium border">
                <h3>Step 3:</h3>
                <p>
                Open the ViewFy App and select the "Add Link" screen.
                </p>
              </div>
              <div className="col-4 col-12-medium border">
                <h3>Step4:</h3>
                <p>
                Paste the copied link and enter your desired duration for the views.
                </p>
              </div>
              <div className="col-4 col-12-medium border">
                <h3>Step5:</h3>
                <p>
                Choose the number of views you want (ViewFy recommends 50).
                </p>
              </div>

              <div className="col-4 col-12-medium border">
                <h3>Step 6:</h3>
                <p>
                Click on "Submit 1" and then "Submit 2" to start the viewing process.
                </p>
              </div>
              <div className="col-4 col-12-medium border">
                <h3>Step 7:</h3>
                <p>
                Open the VPN and connect to a US or any other country server.
                </p>
              </div>
              <div className="col-4 col-12-medium border">
                <h3>Step 8:</h3>
                <p>
                Navigate to the "Stream" screen within the ViewFy App.
                </p>
              </div>

              <div className="col-6 col-12-medium border">
                <h3>Step 9:</h3>
                <p>
                Wait for all the videos to play, then return to the home screen and change the VPN location.
                </p>
              </div>

              <div className="col-6 col-12-medium border">
                <h3>Step 10:</h3>
                <p>
                Repeat steps 7-9 as many times as you want to boost your views further.
                </p>
              </div>
            </div>
            <hr className="major" />
            {/* Elements */}
            <div className="row gtr-200">
              <div className="col-12 col-12-medium">
                {/* Text stuff */}
                <h3>For more detailed instructions and visual guidance, please watch our video tutorial:</h3>
                <h4>Happy Watching :)</h4>
            
                <hr />
                <pre>
                  <code className="bg-dark d-flex justify-content-center">
                  <iframe title="vimeo-player" src="https://player.vimeo.com/video/819094336?h=549f8aa44b"  height="360" frameborder="0"    allowfullscreen></iframe>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToOperate;
