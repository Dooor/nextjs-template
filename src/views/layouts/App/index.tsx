import * as React from 'react';

import { Header } from '../../components/organisms/Header';
import { Main } from '../../components/organisms/Main';

const App: React.SFC<{}> = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
  </>
);

export default App;
