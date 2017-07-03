import React from 'react';

class HeroTitle extends React.Component {
  render() {
     return (
       <div className="root">
        <div>{this.props.children}</div>
        <h1 className="title">{this.props.text}</h1>
        <style jsx>{`
          .root {
            // border: 1px red solid;
            display:block;
            height: 3rem;
            margin: 20px;
          }
          .title {
            font-size: 3rem;
            font-weight: 700;
            color: white;
            font-family: "KiloGram";
          }
        `}</style>
      </div>
    )
  }
}

export default HeroTitle;
