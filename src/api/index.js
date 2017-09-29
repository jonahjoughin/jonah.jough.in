import { PostRecord } from '../records'
import { Set } from 'immutable'
import Prismic from 'prismic-javascript'

const apiEndpoint = "https://joughin.prismic.io/api/v2"

export const getPosts = (req,callback) => {
  initApi(req)
    .then(api => {
      api.query("",	{ orderings : '[document.last_publication_date desc]' })
      .then(res => {
        const projects = res.results.map(
          project => new PostRecord({
            id: project.id,
            height: mapSizeToHeight(project.data.size),
            backgroundColor: project.data.backgroundcolor,
            borderColor: project.data.bordercolor,
            textColor: project.data.textcolor,
            title: project.data.title[0].text,
            imageURL: project.data.image.url,
            link: project.data.link.url
          })
        )
        callback(projects)
      })
    })
}

const mapSizeToHeight = size => {
  if (size === 'Small') return 300;
  if (size === 'Medium') return 400;
  return 500;
}
const initApi = req => Prismic.getApi(apiEndpoint, { req: req })
