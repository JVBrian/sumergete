import React from "react";
import Auth from "../../components/auth/Auth";

const Index = () => {
  return (
    <div>
      <header className="background-animate">
        <div className="header-container">
          <div className="container">
            <h1>SUMÉRGETE</h1>
          </div>
        </div>
        <section className="banner-container">
          <section className="banner-title">
            <Auth />
          </section>

          <div className="banner-image">
            <img src="submarine.svg" alt="" />
          </div>
        </section>

        <div className="effect">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </header>
    </div>
  );
};

export default Index;
