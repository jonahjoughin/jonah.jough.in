import React from 'react'
import styled from 'styled-components'

import MasonryItem from './MasonryItem'

class Masonry extends React.Component {

    constructor(props) {
      super(props)
      this.state = {}
    }
    updateDimensions() {
      if (hasWindow()) {
        this.setState({columns: numberOfColumns(window.innerWidth)});
      }
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
      if (hasWindow()) {
        window.addEventListener("resize", this.updateDimensions.bind(this));
      }
    }
    componentWillUnmount() {
      if (hasWindow()) {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
      }
    }
    render () {
      return (
        <Root>
          <Title>Projects</Title>
          <Content>
            {mapToColumns(this.props.projects || [],this.state.columns).map((col,i) => (
              <Column key={i} hidden={!hasWindow || !this.state.columns}>
                {col.items.map((child) => {
                  return <MasonryItem data={child} key={child.id}/>
                })}
              </Column>
            ))}
          </Content>
        </Root>
      )
    }
}
export default Masonry;

const hasWindow = () => (
  typeof window !== 'undefined' && window.document && window.document.createElement
)

const Root = styled.div`
  width: 100%;
  height: 100vh;

  flex: 1;
  overflow: scroll;
  @media (max-width: 768px) {
		height: 100%;
    background-color: #EEE;
	}
`

const Title = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  color: #888;
  display: block;
  float: right;
  padding: 20px 40px 25px 0px;
  user-select: none;
`

const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0px 15px;

`

const Column = styled.div`
  display: ${props => props.hidden ? 'none' : 'block'};
  margin: 0px 15px;
  flex: 1;
`
const adjustedWidth = width => {
  if (width < 768) {
    return width-30;
  }
  else {
    return width-430;
  }
}

const numberOfColumns = width => {
  return Math.max(1,Math.floor(adjustedWidth(width)/270))
}

const mapToColumns = (children,n) => {

  var columns = Array(n || 1).fill().map(v => ({height:0,items:[]}))
    children.forEach(item => {
      const shortest = columns.reduce((minI, x, i, arr) => x.height < arr[minI].height ? i : minI, 0);
      columns[shortest].items.push(item);
      columns[shortest].height += (item.height+30);
    })
  columns = columns.sort((a,b) => a.height <= b.height);
  return columns;
}
