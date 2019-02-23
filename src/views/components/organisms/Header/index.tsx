// Library
import * as React from 'react';

// Components
import Link from 'next/link';

// Constants
import Animation from '../../../../constants/Styles/Animation';
import Color from '../../../../constants/Styles/Color';
import Shadow from '../../../../constants/Styles/Shadow';
import Size from '../../../../constants/Styles/Size';
import { PagenameType } from '../../../../constants/TypeAliases';

// Style
import styled, { media } from '../../styled-components';

interface IProps {
  activePage: PagenameType;
}

export const Header: React.SFC<IProps> = ({ activePage }) => {
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

  const isHomeActive = activePage === 'home';
  const isCountActive = activePage === 'count';

  return (
    <Wrapper>
      <Nav>
        <Link href='/'><NavLink active={isHomeActive}>Home{isHomeActive && <NavIndicator />}</NavLink></Link>
        <Link href='/count'><NavLink active={isCountActive}>Count{isCountActive && <NavIndicator />}</NavLink></Link>
      </Nav>
    </Wrapper>
  );
};
