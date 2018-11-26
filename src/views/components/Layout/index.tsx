import * as React from 'react';

import Link from 'next/link';

interface IProps {
  title?: string;
}

const Layout: React.SFC<IProps> = ({ children, title = 'This is the default title' }) => (
  <div>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |{' '}
        <Link href='/about'><a>About</a></Link>
      </nav>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>
      I'm here to stay
    </footer>
  </div>
);

export default Layout;
