import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { SessionProvider, useSession, signIn} from "next-auth/react"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <Layout>
      <Component { ...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp

