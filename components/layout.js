// https://portfolio-flax-three-97.vercel.app
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Wrapper, Header, HomeButton } from './layout-styles.js'

const name = 'Julian Aijal';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <Wrapper>
      <Head>
        <link rel="icon" href="...jpg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="robots" content="noindex"></meta>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M8PS5F6');`,
            }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8PS5F6" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      <Header>
        {home ? (
          <>
            <Image
              priority
              // src="/../public/images/elmo-fire.gif"
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
                  // src="/../public/images/elmo-fire.gif"
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