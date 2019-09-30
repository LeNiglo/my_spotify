import fetch from 'isomorphic-unfetch';

import Layout from '../components/layouts/Layout';

import '../styles/pages/index.scss';

const Index = props => (
  <Layout>
    <h1 className='site-title'>My Spotify</h1>
  </Layout>
);

export default Index;
