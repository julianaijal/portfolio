// https://portfolio-flax-three-97.vercel.app
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Wrapper, Header, HomeButton } from './layout-styles.js';
import Schema from '../utility/schema.js'

const name = 'Julian Aijal';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <Wrapper>
      <Head>
        <link rel="icon" href="...jpg" />
        <Schema/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/* <meta name="robots" content="noindex"></meta> */}
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
      </Head>
      
      <Header>
          <>
            <h1>{name}</h1>
          </>
      </Header>
      <main>{children}</main>
      {!home && (
        <HomeButton>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </HomeButton>
      )}
    </Wrapper>
  );
}