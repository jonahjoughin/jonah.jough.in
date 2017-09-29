import React from 'react'
import styled from 'styled-components'

export default ({light,onLeft,onRight}) => (
  <div>
    <Left light={light} onClick={onLeft}/>
    <Right light={light} onClick={onRight}/>
  </div>
)


const Left = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  background: ${props => props.light
    ? `url('static/img/left-arrow-light.png')`
    : `url('static/img/left-arrow-dark.png')`};
  background-size: 50px 50px;
  float: left;
`
const Right = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 10px;
  background: ${props => props.light
    ? `url('static/img/right-arrow-light.png')`
    : `url('static/img/right-arrow-dark.png')`};
  background-size: 50px 50px;
  float: right;
`
