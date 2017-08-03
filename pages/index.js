import React from 'react'
import styled from 'styled-components'

import Meta from '../components/Meta'
import Info from '../components/Info'
import Masonry from '../components/Masonry'

export default () => (
  <div>
    <Meta />
    <Root>
      <Info />
      <Masonry />
    </Root>
  </div>
)

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  @media (max-width: 768px) {
		flex-direction:column;
	}
`
