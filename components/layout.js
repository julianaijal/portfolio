import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { StyledContainer, StyledHeader, StyledBackToHome } from './layout-styles.js'

const name = 'Julian Aijal';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <StyledContainer>
      <Head>
        <link rel="icon" href="...jpg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StyledHeader>
        {home ? (
          <>
            <Image
              priority
              src="/../public/images/elmo.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/../public/images/elmo.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </StyledHeader>
      <main>{children}</main>
      {!home && (
        <StyledBackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </StyledBackToHome>
      )}
    </StyledContainer>
  );
}