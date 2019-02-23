import * as React from 'react';

import { Header } from '../../components/organisms/Header';
import { Main } from '../../components/organisms/Main';

import { PagenameType } from '../../../constants/TypeAliases';

interface IProps {
  page: PagenameType;
}

const App: React.SFC<IProps> = ({ children, page }) => (
  <>
    <Header activePage={page} />
    <Main>
      {children}
    </Main>
  </>
);

export default App;
