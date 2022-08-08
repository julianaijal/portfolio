// https://portfolio-flax-three-97.vercel.app
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Schema from '../utility/schema.js'
import styles from './layout.module.css';

const name = 'Julian Aijal';
export const siteTitle = name;

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="...jpg" />
        <Schema/>
        <meta
          name="description"
          content="Hallo met mij"
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
      <header className={styles.header}>
        <ul className="flex float-right">
          <li className="mr-6">
            <a className="text-white hover:text-blue-800" href="#">Link</a>
          </li>
          <li className="mr-6">
            <a className="text-white hover:text-blue-800" href="#">Link</a>
          </li>
          <li className="mr-6">
            <a className="text-white hover:text-blue-800" href="#">Link</a>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}