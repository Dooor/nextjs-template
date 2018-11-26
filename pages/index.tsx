import Link from 'next/link';
import Layout from '../src/views/components/Layout';

export default () => (
  <Layout title='Home'>
    <h2>Hello Next.js 👋</h2>
    <p><Link href='/about'><a>About</a></Link></p>
  </Layout>
);
