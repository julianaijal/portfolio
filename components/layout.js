import Head from 'next/head';
import Image from 'next/image';
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
        <h1 className='text-white'>{name}</h1>
        <ul className="flex">
        <li className="mr-6">
            <a className="text-white hover:text-blue-800" rel="noopener" href="https://github.com/julianaijal">
              <Image alt='linkedin' src="/github.svg" height={42} width={42}/>
            </a>
          </li>
          <li className="mr-6">
            <a className="text-white hover:text-blue-800" rel="noopener" href="https://twitter.com/Jaijal">
              <Image alt='twitter' src="/twitter.svg" height={42} width={42}/>    
            </a>
          </li>
          <li className="mr-6">
            <a className="text-white hover:text-blue-800" rel="noopener" href="https://www.linkedin.com/in/jaijal/">
              <Image alt='linkedin' src="/linkedin.svg" height={42} width={42}/>    
            </a>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>  
        <p className='text-white text-xs'>Developed by Julian Aijal</p>
      </footer>
    </div>
  );
}