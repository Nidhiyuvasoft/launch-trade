
import Header from './Header';
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="page_content" id="id_ico_home_section">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
