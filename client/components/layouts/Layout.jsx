import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

import '../../styles/layouts/layout.scss';

const Layout = props => (
  <div className='layout'>
    <Header />
    <Sidebar />
    <div className='wrapper'>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
