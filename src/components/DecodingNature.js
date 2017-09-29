import React from 'react'
import styled from 'styled-components'

import Sketch from './Sketch'
import Arrows from './reusable/Arrows'
import Title from './Title'
import cell from '../sketches/cell'
import hurricane from '../sketches/hurricane'
import rose from '../sketches/rose'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.sketches = [
      {
        sketch:cell,
        title:"Cell",
        light: false,
      },
      {
        sketch: hurricane,
        title: "Hurricane",
        light: true,
      },
      {
        sketch: rose,
        title: "Generative Roses",
        light: false,
      }
    ]
    this.state = {index: 0}
  }
  decrementIndex() {
    this.setState((prevState, props) => ({
      index: (prevState.index+this.sketches.length-1)%this.sketches.length
    }))
  }
  incrementIndex() {
    this.setState((prevState, props) => ({
      index: (prevState.index+this.sketches.length+1)%this.sketches.length
    }))
  }
  render() {
    return(
      <div>
        <Root>
          <Sketch sketch={this.sketches[this.state.index].sketch}/>
          <TitleWrapper>
            <Title light={this.sketches[this.state.index].light}>
              {this.sketches[this.state.index].title+" ("+(this.state.index+1)+"/"+this.sketches.length+")"}
            </Title>
          </TitleWrapper>
          <ArrowsWrapper>
            <Arrows
              light={this.sketches[this.state.index].light}
              onLeft = {this.decrementIndex.bind(this)}
              onRight = {this.incrementIndex.bind(this)}
            />
          </ArrowsWrapper>
        </Root>
      </div>
    )
  }
}

const Root = styled.div`
  width: 100%;
  height: 100%;
`
const TitleWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 25px;
`
const ArrowsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`
