
import Link from 'next/link'
import baseUrl from "../helpers/baseUrl"
import { useSession } from "next-auth/react";
import Herosection from "../components/herosection";
import Gallery from '../components/gallery';
import Footer from "../components/Footer";

export default function Home() {
  const { data: session, status } = useSession()
  // if (session) console.log(session);
  return (
    <div >
 
      <div className=" container mx-auto px-4">
      <h1 className=" mt-10 text-6xl font-extrabold text-center text-gray-900 mb-8 drop-shadow-lg">IDF Bal Gurukul</h1>

<div className="flex">
  <div className="w-1/2 mr-8 border-solid border-2 border-white">
    <img src="https://static.wixstatic.com/media/094b60_1776d86f0e9e4214affa5644fc4aabc5~mv2.png/v1/fill/w_866,h_655,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Bal%20Gurukul%20.png" alt="About us" className="w-full rounded"/>
  </div>
  <div className="  w-1/2">
    {/* <h2 className="text-xl font-medium text-gray-800 mb-4">Our Mission</h2> */}
    <p className="text-gray-700 mb-4 text-xl">
IDF Bal Gurukul
Education is of prime importance. IDF Bal Gurukul projects are a success proven sustainable development model.  IDF in its diversified objectives has included village development and education programmes into its fold. development. From a humble beginning in tribal area in Maharashtra and also in Langadiyawas village in Rajasthan, IDF now has 300 plus Bal Gurukuls covering the length and breadth of our country. Before of April 2021 we had 300 plus Bal Gurukuls and by the March 2022 we have .currently 300 plus Bal Gurukuls. Primary donors are Blackstone Charitable Foundation supported 150 Bal Gurukuls and RBL bank Ltd. RBL bank sanctioned 130 Bal Gurukuls in this financial year. The rest are operational by virtue of individual donations.</p>
    
  </div>
</div>
<div className='mt-10 items-center'>
    <Gallery/>
    </div>
</div>
<Footer/>
 
              
           {/* <Herosection /> */}


       </div>

  )
}
