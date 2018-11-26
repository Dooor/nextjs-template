import Link from 'next/link';
import Layout from '../src/views/components/Layout';

export default () => (
  <Layout title='About'>
    <p>This is the about page</p>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Layout>
);
