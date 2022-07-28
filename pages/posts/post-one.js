import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Post() {
  return (
    <>
      <Head>
        <title>Post One</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`FB script loaded`)
        }
      />
      <h1>Post one</h1>
      <Link href='/'>
          <a>{'<'} Back</a>
      </Link>
    </>
  );
}