// Library
import { fromJS } from 'immutable';
import withRedux from 'next-redux-wrapper';
import App, { AppProps, Container, DefaultAppIProps } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';

// Store
import { initStore } from '../src/stores';

interface IProps {
  store: any;
}

class MyApp extends App<IProps & DefaultAppIProps & AppProps> {
  public static async getInitialProps({ Component, ctx }) {
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
  deserializeState: (state) => fromJS(state),
  serializeState: (state) => state.toJS(),
})(MyApp);
