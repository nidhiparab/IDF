import Navbar from "./Navbar"
import Head from 'next/head'
const Layout =({children})=>{
    return(
        <>
        <Head>
            <link rel="stylesheet" href="../style.css"/>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
        <Navbar/>
        {children}             {/*--------------content of the page----------------*/}
        
        </>
    )
}
export default Layout