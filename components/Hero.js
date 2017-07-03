import React from 'react';
import Tag from './Tag.js';
import TagGroup from './TagGroup.js';
import Author from './Author.js';
import HeroTitle from './HeroTitle.js';

export default () => (
  <div className="root">
    <div className="overlay" />
    <img src="../static/img/defaultHero4.jpg"/>
    <div className="info">
      <HeroTitle text="A Week in Jordan"></HeroTitle>
      <Author name="Jonah Joughin"/>
      <TagGroup className = "tags">
        <Tag name="Travel"/>
        <Tag name="Middle East"/>
      </TagGroup>
    </div>

  <style jsx>{`
    .root {
      height: 100vh;
      width: 100vw;
      position: relative;
    }
    .overlay {
      background: rgba(0,0,0,0);
background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,0)), color-stop(20%, rgba(0,0,0,0)), color-stop(100%, rgba(0,0,0,1)));
background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%);
background: -o-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%);
background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%);
background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 );
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
      left: 25px;
      bottom: 25px;
      z-index: 3;
    }
  `}</style>
</div>
)
