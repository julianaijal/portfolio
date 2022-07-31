// https://portfolio-flax-three-97.vercel.app
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='text-center'>
          (This is a sample website on{' '}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>
    </Layout>
  );
}
