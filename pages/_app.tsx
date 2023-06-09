import Loading from '@/components/Loading';
import '@/styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from 'contexts/AuthContext';
import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Loading />
    </AuthProvider>
  )
}
