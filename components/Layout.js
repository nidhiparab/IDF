import Navbar from "./Navbar"
import Head from 'next/head'
import Footer from "./Footer"
import Herosection from "./herosection"
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/../style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>IDF</title>
      </Head>
      <Navbar />
      {children}             {/*--------------content of the page----------------*/}
     
      {/* <Footer /> */}
    </>
  )
}
export default Layout