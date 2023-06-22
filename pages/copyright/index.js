import React from 'react'
import Image from 'next/image';
import logo from '../../public/images/ResearchCellLogo.png'
import nidhi from '../../public/images/nidhiparab_photo.jpeg'
import SAKEC from '../../public/images/SAKEC.png'
import principal from '../../public/images/principal-pic.jpg'
import { FaLinkedin } from "react-icons/fa";

function index() {
  return (
    <>
    <div className={`bg-blue-600 flex justify-center text-center h-60 `}>
    <Image
                  className="m-auto w-1/6 p-2 justify-center"
                  src={SAKEC}
                  alt="idf-logo.png"
                />
    
        <span className='m-auto text-5xl text-white font-extrabold'>Team of SAKEC</span>
        <Image
                  className="m-auto w-1/6 p-2 justify-center"
                  src={logo}
                  alt="idf-logo.png"
                />
      </div>
      
      
      <div > 
        <div className="m-20 p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl">
              <div className={` flex justify-center text-center h-10`}>
  
                    <span className='m-auto text-3xl text-blue-600 font-extrabold'>Principal</span>
              </div>
              <div className={` flex justify-center text-center p-10`}>
                    <div>
                          <Image
                          className="m-auto w-1/1 pb-5 justify-center"
                          src={principal}
                          alt="idf-logo.png"
                          />
                    <span>
                      <div className="flex justify-center">
                          <h5  className="pr-1">Dr. Bhavesh Patel</h5>
                          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                      </div>
                      <p>Principal <br/>Shah & Anchor Kutchhi Engineering College</p>
                    </span>
                    </div></div>
      </div>
      
      
      
      
      
      
      <div className="m-20 p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl">
      <div className={` flex justify-center text-center h-10`}>
  
        <span className='m-auto text-3xl text-blue-600 font-extrabold'>Mentors</span>
        </div>
        <div className={` flex justify-center text-center p-10`}>
        <div>
          <Image
                  className="m-auto w-2/2 p-10 pb-3 justify-center"
                  src={nidhi}
                  alt="idf-logo.png"
                />
                <span>
                  <div className="flex justify-center">
                  <h5  className="pr-1">Nidhi Parab</h5>
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                 </div>
                <p>Developer</p>
                </span>
          </div>
          <div>
          <Image
                  className="m-auto w-2/2 p-10 pb-3 justify-center"
                  src={nidhi}
                  alt="idf-logo.png"
                />
                <span>
                  <div className="flex justify-center">
                  <h5  className="pr-1">Nidhi Parab</h5>
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                 </div>
                <p>Developer</p>
                </span>
          </div>
          <div>
          <Image
                  className="m-auto w-2/2 p-10 pb-3 justify-center"
                  src={nidhi}
                  alt="idf-logo.png"
                />
                <span>
                  <div className="flex justify-center">
                  <h5  className="pr-1">Nidhi Parab</h5>
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                 </div>
                <p>Developer</p>
                </span>
          </div>
          </div>
      </div>
      <div className="m-20 p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl">
      <div className={` flex justify-center text-center h-10`}>
  
        <span className='m-auto text-3xl text-blue-600 font-extrabold'>Developing Team</span>
        </div>
        <div className={` flex justify-center text-center p-10`}>
        <div>
          <Image
                  className="m-auto w-2/2 p-10 pb-3 justify-center"
                  src={nidhi}
                  alt="idf-logo.png"
                />
                <span>
                  <div className="flex justify-center">
                  <h5  className="pr-1">Nidhi Parab</h5>
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                 </div>
                <p>Developer</p>
                </span>
          </div>
          <div>
          <Image
                  className="m-auto w-2/2 p-10 pb-3 justify-center"
                  src={nidhi}
                  alt="idf-logo.png"
                />
                <span>
                  <div className="flex justify-center">
                  <h5  className="pr-1">Nidhi Parab</h5>
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                 </div>
                <p>Developer</p>
                </span>
          </div>
          <div>
          <Image
                  className="m-auto w-2/2 p-10 pb-3 justify-center"
                  src={nidhi}
                  alt="idf-logo.png"
                />
                <span>
                  <div className="flex justify-center">
                  <h5  className="pr-1">Nidhi Parab</h5>
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                 </div>
                <p>Developer</p>
                </span>
          </div>
          </div>
      </div>
      
      
      </div>
      </>
  )
}

export default index