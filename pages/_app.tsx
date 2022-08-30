import { JSXElementConstructor } from 'react'
import '../styles/globals.css'

interface Props<P extends object> {
  Component: JSXElementConstructor<P>;
  pageProps: P;
}

const MyApp = <T extends object>({ Component, pageProps }: Props<T>): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
