import React from 'react'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

import Meta from '../components/Meta'
import Info from '../components/Info'
import Masonry from '../components/Masonry'

const apiEndpoint = "https://joughin.prismic.io/api/v2"
const mapSizeToHeight = size => {
  if (size === 'Small') return 300;
  if (size === 'Medium') return 400;
  return 500;
}
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const api = await Prismic.getApi(apiEndpoint, { req: req })
    const res = await api.query("",	{ orderings : '[document.last_publication_date desc]' })
    const projects = res.results.map(
      project => ({
        id: project.id,
        height: mapSizeToHeight(project.data.size),
        backgroundColor: project.data.backgroundcolor,
        borderColor: project.data.bordercolor,
        textColor: project.data.textcolor,
        title: project.data.title[0].text,
        imageURL: project.data.image.url,
        link: project.data.link.url
      }))
    return { projects: projects }
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Meta />
        <Root>
          <Info />
          <Masonry projects={this.props.projects}/>
        </Root>
      </div>
    )
  }
}

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  @media (max-width: 768px) {
		flex-direction:column;
	}
`
