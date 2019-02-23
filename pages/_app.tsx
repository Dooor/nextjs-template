// Library
import { fromJS } from 'immutable';
import withRedux from 'next-redux-wrapper';
import App, { AppProps, Container, DefaultAppIProps, NextAppContext } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from '../src/views/components/styled-components';

// Store
import { initStore } from '../src/stores';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto,sans-serif;
    font-weight: 400;
  }
`;

interface IProps {
  store: any;
}

class MyApp extends App<IProps & DefaultAppIProps & AppProps> {
  public static async getInitialProps(context: NextAppContext) {
    const {
      Component,
      ctx,
    } = context;

    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps({ ...ctx}) : {}),
    };
  }

  /**
   * @memo [ts] Type 'Readonly<{ children?: ReactNode; }> & Readonly<object & AppComponentProps<DefaultQuery>>'
   *  has no property 'store' and no string index signature.
   */
  public render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <GlobalStyle />
      </Container>
    );
  }
}

export default withRedux(initStore, {
  deserializeState: (state: any) => fromJS(state),
  serializeState: (state: any) => state.toJS(),
})(MyApp);
