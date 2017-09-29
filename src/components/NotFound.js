import React from 'react';
import styled from 'styled-components'

export default () => (
  <Root>
    <H1>404: Page Not Found</H1>
  </Root>
)

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: white;
  top: 0;
`
const H1 = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  font-size: 72px;
  font-weight: 400;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #444;
`
