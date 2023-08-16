import styles from '../styles/Home.module.scss';
import { Hero, NavBar, Footer } from '../components';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Layout;