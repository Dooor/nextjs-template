// Library
import * as React from 'react';

// Constants
import Size from '../../../../constants/Styles/Size';

// Styles
import styled from '../../styled-components';

export const Main: React.SFC<{}> = ({ children }) => {
  const Wrapper = styled.main`
    padding: 0 ${Size.GUTTER};
  `;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
