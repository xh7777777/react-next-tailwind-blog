import '@/styles/globals.css'
import ContextProvider from '@/components/Provider/ContextProvider'
import Layout from '@/components/ui/Layout'
export default function App({ Component, pageProps}) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>)
}
