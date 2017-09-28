import React from 'react'
import styled from 'styled-components'

export default ({children,light}) => ( <Title light={light}>{children}</Title> )

const Title = styled.h1`
  color: ${props => props.light ? "#FBFBFB" : "080808"};
  font-family: 'Titillium Web', sans-serif;
  font-weight: 400;
`
