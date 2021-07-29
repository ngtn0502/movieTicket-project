import Navbar from '../main/components/NavBar.component/Navbar.js';
import Footer from '../main/components/Footer.component/Footer';

export const MainTemplates = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
