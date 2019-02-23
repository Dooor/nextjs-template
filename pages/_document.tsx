// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<IProps> {
  public static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, minimum-scale=1, initial-scale=1,user-scalable=no, shrink-to-fit=no'
          />
          <meta name='description' content='' />
          <meta name='author' content='' />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
