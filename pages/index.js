// https://portfolio-flax-three-97.vercel.app
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className='text-center'>
          (This is a sample website on{' '}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>
    </Layout>
  );
}
