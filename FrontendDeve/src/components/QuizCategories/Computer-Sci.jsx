import React from "react";
const PageCs = () => {
  return (
    <>
      <div>
        <style>
          {`
    .cs{
    color: red;
    }
      `}
        </style>
      </div>
      <div>
        <nav>
          <h1 className="cs">Computer-science-page!</h1>
        </nav>

        <section>
          <div className="card">
            <div className="box-card card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <div className="logo2">
                      <span>DSA</span>
                    </div>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageCs;
