import Link from 'next/link'
import baseUrl from "../helpers/baseUrl"

export default function Home() {

  
  return (
    <div className="rootcard">
      <h1>Home</h1>
    </div>
  )
}

// export async function getStaticProps() {
//   let res = await fetch( baseUrl + "/api/balgurukul/getAll")
//   const data = await res.json();
//   console.log(data)
//   return {
//     props: {
//       bgk:data
//     }
//   }
// }