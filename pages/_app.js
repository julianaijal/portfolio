// https://portfolio-flax-three-97.vercel.app
import '../styles/global.css';
import { useEffect } from 'react'
import analytics from '../utility/analytics'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page() 
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp