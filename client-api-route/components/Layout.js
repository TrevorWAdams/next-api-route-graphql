import Head from "next/head";
import Nav from './Nav'
const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
