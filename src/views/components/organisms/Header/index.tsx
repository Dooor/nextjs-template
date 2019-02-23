// Library
import * as React from 'react';

// Components
import Link from 'next/link';

// Constants
import Animation from '../../../../constants/Styles/Animation';
import Color from '../../../../constants/Styles/Color';
import Shadow from '../../../../constants/Styles/Shadow';
import Size from '../../../../constants/Styles/Size';

// Style
import styled, { media } from '../../styled-components';

export const Header: React.SFC<{}> = () => {
  const Wrapper = styled.header`
    background: ${Color.HEADER.BACKGROUND};
    box-shadow: ${Shadow.HEADER};
    display: flex;
    height: ${Size.HEADER.HEIGHT.PC};
    position: relative;

    ${media.lessThan('medium')`
      height: ${Size.HEADER.HEIGHT.SP};
    `}
  `;

  const Nav = styled.nav`
    display: block;

    ${media.lessThan('medium')`
      width: 100%;
      position: absolute;
      bottom: 0;
    `}
  `;

  const NavLink = styled.a<{ active: boolean }>`
    display: inline-block;
    line-height: ${Size.HEADER.HEIGHT.PC};
    cursor: pointer;
    padding: 0 ${Size.GUTTER};
    position: relative;
    transition: color ${Animation.EASE_IN};
    color: ${(props) => props.active ? Color.TEXT.WHITE : Color.TEXT.DARK};

    &:hover {
      color: ${Color.TEXT.WHITE};
    }

    ${media.lessThan('medium')`
      line-height: 48px;
    `}
  `;

  const NavIndicator = styled.div`
    position: absolute;
    bottom: 0;
    left: ${Size.GUTTER};
    right: ${Size.GUTTER};
    height: 4px;
    background: ${Color.HEADER.INDICATOR};
  `;

  return (
    <Wrapper>
      <Nav>
        <Link href='/'><NavLink active={true}>Home<NavIndicator /></NavLink></Link>
        <Link href='/count'><NavLink active={false}>Count</NavLink></Link>
      </Nav>
    </Wrapper>
  );
};
