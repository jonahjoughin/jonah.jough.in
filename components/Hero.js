import React from 'react';

export default () => (
  <div className="root">
    <div className="overlay" />
    <img src="../static/img/defaultHero.jpg"/>
    <div className="info">
      <div className = "titleBox">
        <h1 className="title">A Sample Title</h1>
      </div>
      <div className = "subtitleBox">
        <h2 className="subtitle">Jonah Joughin</h2>
      </div>
    </div>

  <style jsx>{`
    .root {
      background-color: #A85;
      height: 100vh;
      width: 100vw;
      position: relative;
    }
    .overlay {
      background: linear-gradient(0deg, #907860, #0000 80%, #0000);
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 2;
    }
    img {
      height: 100%;
      width: 100%;
      position: absolute;
      object-fit: cover;
    }
    .info {
      position: absolute;
      left: 40px;
      bottom: 25px;
      z-index: 3;
    }
    .title {
      font-size: 3rem;
      font-weight: 700;
    }
    .subtitle {
      font-size: 1rem;
      font-weight: 400;
    }
    .title, .subtitle {
      //padding: 0px 20px 5px 0px;
      padding: 3px 0px;
      max-width: 80%;
      box-decoration-break: clone;
      font-family: "Didot";
      position:relative;
      color:#fff;
      display: inline;
      // background: #AAA;
      // box-shadow: 15px 0 0 #AAA, -15px 0 0 #AAA;
    }
    .titleBox {
      margin-bottom: 18px;
    }
    .subtitleBox {
      margin-top: 18px;
    }
  `}</style>
</div>
)
