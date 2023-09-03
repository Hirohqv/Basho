import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'typeface-oswald';
import 'typeface-source-sans-pro';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
