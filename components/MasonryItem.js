import React from 'react'
import styled from 'styled-components'

export default ({data}) => {
  const height = data.height;
  return (
    <a href={data.link}>
      <Root height={data.height.toString()+"px"} backgroundColor={data.backgroundColor} borderColor={data.borderColor}>
        <Title color={data.textColor}>{data.title}</Title>
        <Img src={data.imageURL}/>
      </Root>
    </a>
  )
}

const Root = styled.div`
  height: ${props => props.height ? props.height:"100px"};
  width: 100%;
  margin-bottom: 30px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
  border: ${props => props.borderColor ? "2px solid "+props.borderColor : 'none'};
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.55);
  transition: transform 0.25s ease-in-out;
  cursor: hand; cursor: pointer;
  user-select: none;
  &:hover, &:active {
    transform: scale(1.03);
  }
`

const Title = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.color ? props.color : 'white'};
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 20px;
`

const Img = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  max-width: 50%;
`
