// Library
import { fromJS } from 'immutable';
import withRedux from 'next-redux-wrapper';
import App, { AppProps, Container, DefaultAppIProps, NextAppContext } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';

// Store
import { initStore } from '../src/stores';

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
      </Container>
    );
  }
}

export default withRedux(initStore, {
  deserializeState: (state: any) => fromJS(state),
  serializeState: (state: any) => state.toJS(),
})(MyApp);
