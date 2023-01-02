
import Link from 'next/link'
import baseUrl from "../helpers/baseUrl"
import { useSession } from "next-auth/react"


export default function Home() {
  const { data: session, status } = useSession()
  if(session) console.log(session);
  return (
    <div className="rootcard">
      <div className='rtcrd'>    <h1>Home page</h1>
        <p>IDF</p>
        <button className='Rbtn'> Know More</button>
      </div>



    </div>

  )
}
