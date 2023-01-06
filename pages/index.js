
import Link from 'next/link'
import baseUrl from "../helpers/baseUrl"
import { useSession } from "next-auth/react";
import Herosection from "../components/herosection";

export default function Home() {
  const { data: session, status } = useSession()
  if (session) console.log(session);
  return (
    <div className="rootcard">
      <div className='rtcrd'>
        {/* <button className='Rbtn'> Know More</button>  */}
      </div>
      {/* <Herosection /> */}
    </div>

  )
}
