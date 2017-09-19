import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import stylesheet from '../styles/reset.css'

export default class extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>My page</title>
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
