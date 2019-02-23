import styled from '../../styled-components';

export const Text: React.SFC<{}> = ({ children }) => {
  const Wrapper = styled.span`
    line-height: 1.0;
  `;
  return <Wrapper>{children}</Wrapper>;
};
