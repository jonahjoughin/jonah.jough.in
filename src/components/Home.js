import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Info from './Info'
import Masonry from './Masonry'

const Home = ({projects}) => (
  <div>
    <Root>
      <Info />
      <Masonry projects={projects}/>
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

const mapStateToProps = (state, ownProps) => {
  console.log("Posts!", state.posts.toArray());
  return {
      projects: state.posts.toArray()[0]
  }
}

export default connect(mapStateToProps)(Home)
