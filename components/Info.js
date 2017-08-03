import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default () => (
  <Root>
    <Title>jonah<br/>joughin</Title>
    <Item>Developer at <InlineLink href="https://www.google.com">Mudawwanat</InlineLink></Item>
    <Item>Currently working on <InlineLink href="https://www.google.com">HungryAtNYUAD</InlineLink></Item>
    <Item>Majoring in Computer Science and Interactive Media at <InlineLink href="https://www.google.com">New York University Abu Dhabi</InlineLink></Item>
    <Item>Lives in <InlineLink href="https://www.google.com">Abu Dhabi, UAE</InlineLink> and <InlineLink href="https://www.google.com">Seattle, WA</InlineLink></Item>
    <ButtonGroup>
      <Button>Contact Me</Button>
      <Button>Download CV</Button>
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
  font-family: 'Futura';
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
  font-family: 'Futura';
  font-size: 20px;
  color: #111;
  margin: 5px 0px;
  &::selection {
    background: #6913FE;
    color: white;
  }
`
const InlineLink = styled.a`
  font-family: 'Futura';
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
  font-family: 'Futura';
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
