import React from 'react'
import styled from 'styled-components'

export default () => (
  <Root>
    <Title>Jonah<br/>Joughin</Title>
    <Item>Developer at <InlineLink href="http://www.mudawwanat.com">Mudawwanat</InlineLink></Item>
    <Item>Currently working on <InlineLink href="https://github.com/robwayne/hungrynyuad">HungryAtNYUAD</InlineLink></Item>
    <Item>Majoring in Computer Science and Interactive Media at <InlineLink href="https://nyuad.nyu.edu/en/">New York University Abu Dhabi</InlineLink></Item>
    <Item>Lives in <InlineLink href="https://goo.gl/maps/yBRYsTA8nAT2">Abu Dhabi, UAE</InlineLink> and <InlineLink href="https://goo.gl/maps/koGb78DWdAp">Seattle, WA</InlineLink></Item>
    <ButtonGroup>
      <a href="mailto:jonah@jough.in" target="_top">
        <Button>Contact Me</Button>
      </a>
      <a href="/static/pdf/jonah-joughin-cv.pdf" download>
        <Button>Download CV</Button>
      </a>
    </ButtonGroup>
  </Root>
)

const Root = styled.div`
  display: flex;
  margin: 0px 10px 0px 40px;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  min-height: min-content;
  max-width: 400px;
`
const Title = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #6913FE;
  margin: 20px 0px;
  &::selection {
    background: #6913FE;
    color: white;
  }
`
const Item = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  color: #111;
  margin: 5px 0px;
  &::selection {
    background: #6913FE;
    color: white;
  }
`
const InlineLink = styled.a`
  font-family: 'Titillium Web', sans-serif;
  text-decoration: none;
  font-size: 20px;
  color: #6913FE;
  &::selection {
    background: #6913FE;
    color: black;
  }
`
const Button = styled.div`
  background-color: #6913FE;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  color: white;
  display: inline-block;
  padding: 5px 15px;
  margin: 5px 20px 5px 0px;
  cursor: hand; cursor: pointer;
  user-select: none;
  border-radius: 3px;
  &:hover, &:active {
    background-color: white;
    border: 3px solid #6913FE;
    padding: 2px 12px;
    color: #6913FE;
  }
`
const ButtonGroup = styled.div`
  margin: 20px 0px;
`
