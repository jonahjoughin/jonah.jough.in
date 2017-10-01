import React from 'react'
import styled from 'styled-components'

import MasonryItem from './MasonryItem'

const MasonryColumn = ({items}) => (
  <Root>
    {items.map(item => (
      <MasonryItem data={item} key={item.id}/>
    ))}
  </Root>
)

const Root = styled.div`
  margin: 0px 15px;
  flex: 1;
`

export default MasonryColumn;
