import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import '@/components/styles.scss'
import '@/components/UI/styles.scss'
import Head from 'next/head'



export default function App({ Component, pageProps }) {
  return(<>
 
    <Layout>
        <Component {...pageProps} />
    </Layout>
     
    </> )
  
 
}
