import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="root">
      <style jsx>{`
        .root {
          background-color: #EEE;
          height: 64px;
          width: 100vw;
          max-width: 960px;
          margin: auto;
          height: 1000px;
        }
      `}</style>
      </div>
    )
  }
}

export default Body;
