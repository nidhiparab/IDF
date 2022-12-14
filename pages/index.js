
import Link from 'next/link'
import baseUrl from "../helpers/baseUrl"


export default function Home() {

  
  return (
    <div className="rootcard">
      <div className='rtcrd'>    <h1>Home page</h1>
                <p>IDF</p>
               <button className='Rbtn'> Know More</button> 
               </div>
  
                
        
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