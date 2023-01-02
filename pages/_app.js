import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { SessionProvider } from "next-auth/react"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
// import layout from "../components/Layout"

// function MyApp({Component,pageProps}){
//     <layout>return <Component{...pageProps}/></layout>
    
// }
// export default MyApp    