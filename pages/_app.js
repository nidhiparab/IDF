import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
// import layout from "../components/Layout"

// function MyApp({Component,pageProps}){
//     <layout>return <Component{...pageProps}/></layout>
    
// }
// export default MyApp    