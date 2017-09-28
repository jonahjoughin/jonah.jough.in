// import React from 'react'
// import styled from 'styled-components'
//
// export default class P5Wrapper extends React.Component {
//
//   componentDidMount() {
//     if (this.hasWindow()) {
//       const p5 = require('../sketches/p5.js');
//       p5.disableFriendlyErrors = true;
//       this.canvas = new p5(this.props.sketch, this.wrapper);
//       if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
//         this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
//       }
//     }
//   }
//
//   componentWillReceiveProps(newprops) {
//     if (this.hasWindow()) {
//       const p5 = require('../sketches/p5.js')
//       p5.disableFriendlyErrors = true;
//       if(this.props.sketch !== newprops.sketch){
//         this.canvas.remove();
//         //this.wrapper.removeChild(this.wrapper.childNodes[0]);
//         this.canvas = new p5(newprops.sketch, this.wrapper);
//       }
//       if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
//         this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
//       }
//     }
//   }
//
//   render() {
//     return <div ref={wrapper => this.wrapper = wrapper}></div>;
//   }
//
//   hasWindow() {
//     return typeof window !== 'undefined' && window.document && window.document.createElement
//   }
// }
