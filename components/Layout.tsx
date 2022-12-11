import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import features from '../src/features';

type Props = {
  children?: ReactNode
  title?: string
}

function Layout({ children, title = 'Fractal Drawer' }: Props) {
  return (
    <div id='Root'>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          {
            features.map((feature, _) => {
              return <Link className='feature-link' key={feature.name} href={feature ? `/${feature.id}` : '/'}>{feature.name}</Link>
            })
          }
        </nav>
      </header>
        {children}
      <footer>
      </footer>
    </div>
  );
};

export default Layout;
