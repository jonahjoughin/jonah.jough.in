import React from 'react';
import NavBar from './NavBar.js'
import NavItem from './NavItem.js'

export default () => (
  <div className="root">
      <img src="../static/img/logo.png"/>
      <div className = "navContainer">
        <NavBar>
          <NavItem name="About"/>
          <NavItem name="Blog"/>
          <NavItem name="Contact"/>
          <NavItem name="Home"/>
        </NavBar>
      </div>


  <style jsx>{`
    .root {
      background-color: #FFF;
      height: 64px;
      width: 100vw;
    }
    .navContainer {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 64px;
    }
    img {
      // margin: auto;
      margin-left: 6px;
      height: 64px;
      width: 64px;
    }
  `}</style>
</div>
)
