import express from 'express'
import path from 'path'
import Prismic from 'prismic-javascript'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Map, Record, Set, Seq, Collection, toJSON } from 'immutable'

import App from './app'
import rootReducer from './reducers'
import { getPosts } from './api'
import { StoreRecord, PostRecord, recordTransit } from './records'

const app = express();
app.use('/static', express.static(path.join(__dirname, 'static')))

app.use((req,res) => {
  console.log(req);
  getPosts(req,projects => {
    const preloadedState = new StoreRecord({posts: Set.of(projects)});
    res.send(renderFullPage(req.url,preloadedState));
  })
})

const renderFullPage = (url, preloadedState) => {
  const store = createStore(rootReducer, preloadedState)
  const context = {}
  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  ))
  const css = sheet.getStyleTags()
  const finalState = store.getState()
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jonah.jough.in</title>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="/static/css/reset.css">
        ${css}
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(recordTransit.toJSON(finalState)).replace(/</g, '\\u003c')}
          </script>
        <script src="/static/js/bundle.js"></script>
      </body>
    </html>`)
}

app.listen(3000, () => console.log('App listening on port 3000'));
