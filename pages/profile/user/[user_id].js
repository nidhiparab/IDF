import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { useState } from 'react';

import CustomModal from '../../../components/Modals/CustomModal';


const UserProfile = ({ user, hod, spoc, teacher }) => {

  const { data: session, status } = useSession()
  
  const [resetPass, setResetPass] = useState(false);
  const [update, setUpdate] = useState(false);
  const [old, setOld] = useState('');
  const [newP, setNewP] = useState('');
  const [newCP, setNewCP] = useState('');
  const [error, setError] = useState('');
  
  const [desgination, setDesignation] = useState(user.desgination);
  const [title, setTitle] = useState(user.title);
  const [f_name, setF_name] = useState(user.f_name);
  const [m_name, setM_name] = useState(user.m_name);
  const [l_name, setL_name] = useState(user.l_name);
  const [mob, setMob] = useState(user.mob);
  const [qualification, setQuali] = useState(user.qualification);
  

  const handleResetPasswordSubmit = async (event) => {
    event.preventDefault();

    if (newP !== newCP) return setError('New Password and Confirm Password do not match')
    if (newP.length < 8) return setError('Password must be atleast 8 characters long')


    // Prepare data to send to server
    const data = { user_id: session.user.user_id, user_email: session.user.email, newPass: newP, oldPass: old };

    // Use fetch to make a POST request to server endpoint

    const response = await fetch("/api/user/resetPass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await response.json();
    
    if(res.error) return setError(res.error)
    
    // Do something with successful response
    setError('')
    setOld('')
    setNewP('')
    setNewCP('')
    setResetPass(false)

  };
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send to server
    const data = { user_id: session.user.user_id, desgination, title, f_name, m_name, l_name, mob, qualification };

    // Use fetch to make a POST request to server endpoint

    const response = await fetch("/api/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await response.json();
    
    if(res.error) return setError(res.error)
    
    // Do something with successful response
    setError('')
    setOld('')
    setNewP('')
    setNewCP('')
    setResetPass(false)

  };

  // User Object
  //   desgination
  //   email
  //   f_name
  //   l_name
  //   m_name
  //   mob
  //   qualification
  //   title
  //   user_id

  // hod Object
  //   bg_id
  //   bg_name
  // SAME FOR SPOC AND TEACHER

  // Designation Title First Middle Last 
  return (
    <>
      <CustomModal show={resetPass} onClose={() => setResetPass(false)}  left='30%'>
       
        <div className="fixed items-center w-1/3 bg-white shadow-lg">
  <div className="p-6">
    <h3 className="text-3xl font-extrabold  text-blue-600 mb-2">Reset Password</h3>
    <form onSubmit={handleResetPasswordSubmit}>
      <div className="mb-4">
        <label className="block text-xl font-bold text-blue-600 mb-2">Old Password</label>
        <input 
          className="border border-black-600 w-full p-2 bg-white" 
          type="text" 
          value={old} 
          onChange={(e) => setOld(e.target.value)} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-xl font-bold text-blue-600 mb-2">New Password</label>
        <input 
           className="border border-black-600 w-full p-2 bg-white"  
          type="text"  
          value={newP} 
          onChange={(e) => setNewP(e.target.value)} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-xl font-bold text-blue-600 mb-2">Confirm New Password</label>
        <input 
            className="border border-black-600 w-full p-2 bg-white" 
          type="text"  
          value={newCP} 
          onChange={(e) => setNewCP(e.target.value)} 
        />
      </div>
      <button className="bg-blue-500 text-white p-2 w-full hover:bg-blue-700">Submit</button>
      <span>{error}</span>
    </form>
  </div>
</div>
        
      </CustomModal>
      
      
      <CustomModal show={update} onClose={() => setUpdate(false)} left='15%' >
      <div className="fixed justify-center w-2/3 bg-white shadow-lg">
  <div className="p-6      ">

    <h3 className="text-3xl font-extrabold text-blue-600 mb-3">Update Details</h3>
        
        
        
        <form onSubmit={handleUpdateSubmit} >

<div className="flex flex-wrap  ">
  <div className="w-1/2 pr-4">
    <label className="text-xl font-bold text-blue-600 mb-2">Designation</label>
    <input className="border border-black-600 w-full p-2 bg-white" type="text" value={desgination} onChange={(e) => setDesignation(e.target.value)} />
  </div>
  <div className="w-1/2 pl-4">
    <label className="text-xl font-bold text-blue-600 mb-2">Title</label>
    <input className="border border-black-600 w-full p-2 bg-white" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
  </div>
  <div className="w-1/2 pr-4 mt-4">
    <label className="text-xl font-bold text-blue-600 mb-2">First Name</label>
    <input className="border border-black-600 w-full p-2 bg-white" type="text" value={f_name} onChange={(e) => setF_name(e.target.value)} />
  </div>
  <div className="w-1/2 pl-4 mt-4">
    <label className="text-xl font-bold text-blue-600 mb-2">Middle Name</label>
    <input className="border border-black-600 w-full p-2 bg-white" type="text" value={m_name} onChange={(e) => setM_name(e.target.value)} />
  </div>
  <div className="w-1/2 pr-4 mt-4">
    <label className="text-xl font-bold text-blue-600 mb-2">Last Name</label>
    <input className="border border-black-600 w-full p-2 bg-white" type="text" value={l_name} onChange={(e) => setL_name(e.target.value)} />
  </div>
  <div className="w-1/2 pl-4 mt-4">
    <label className="text-xl font-bold text-blue-600 mb-2">Mobile Number</label>
    <input className="border border-black-600 w-full p-2 bg-white" type="text" value={mob} onChange={(e) => setMob(e.target.value)} />
  </div>
  <div className="w-1/2 pr-4 mt-4">
    <label className="text-xl font-bold text-blue-600 mb-2">Qualification</label>
    <input className="border border-black-600 w-full p-2 bg-white" type="text" value={qualification} onChange={(e) => setQuali(e.target.value)} />
  </div></div> <br/>
              <button className="bg-blue-500 text-white p-2 w-full hover:bg-blue-700"  type='submit'>Submit</button>
      
              <span>{error}</span>
        
      
        </form>
        </div>    </div>
      </CustomModal>
      
      <div className='bg-blue-600 flex justify-center text-center h-60'>
        <span className='m-auto text-5xl text-white font-extrabold'>Profile Page</span>
      </div>
      <div className="m-20 p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl">
        <div className=' text-2xl'>
          <div className='justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Name</h3>
            <span className='mt-auto mb-2'>{user?.title} {user?.f_name} {user?.m_name} {user?.l_name}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Designation</h3>
            <span className='mt-auto mb-2'>{user.desgination}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Assigned Balgurukul</h3>
            {hod.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As HOD</span> : <span></span>}
            {hod.length > 0 && hod.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{bg.bg_name}</Link></span>) })}
            {spoc.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As SPOC</span> : <span></span>}
            {spoc.length > 0 && spoc.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{bg.bg_name}</Link></span>) })}
            {teacher.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As Teacher</span> : <span></span>}
            {teacher.length > 0 && teacher.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{bg.bg_name}</Link></span>) })}
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Qualification</h3>
            <span className='mt-auto mb-2'>{user?.qualification}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Contact</h3>
            <span className='mt-auto mb-2'>{user?.email}</span>
            <span className='mt-auto mb-2'>{user?.mob}</span>
          </div>
          { session?.user.user_id === user.user_id? <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <button className='mt-auto mb-2 text-2xl font-bold text-blue-600 border-2 border-blue-600 rounded-lg py-2 px-4 hover:bg-blue-600 hover:text-white' onClick={() => setResetPass(true)}>Reset Password</button>
            <br />
            
          </div> : <></> }
         
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params: { user_id } }) {
  const res = await fetch(`${baseUrl}/api/user/${user_id}`)
  const data = await res.json()
  return {
    props: {
      user: data.user,
      hod: data.hod,
      spoc: data.spoc,
      teacher: data.teacher,
    },
  }
}

export default UserProfile;


 