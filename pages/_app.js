import '@/styles/globals.css'
import Layout from '@/components/ui/Layout'
import ContextProvider from '@/components/Provider/ContextProvider'
export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>)
}
