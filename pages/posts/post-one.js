import Link from 'next/link'
import Head from 'next/head';

export default function Post() {
  return (
    <>
      <Head>
        <title>Post One</title>
      </Head>
      <h1>Post one</h1>
      <Link href='/'>
          <a>{'<'} Back</a>
      </Link>
    </>
  );
}