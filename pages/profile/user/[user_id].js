import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import Link from 'next/link';

const UserProfile = ({ user, hod, spoc, teacher }) => {
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
              {hod.length > 0 && hod.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{ bg.bg_name }</Link></span>)})}
              {spoc.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As SPOC</span> : <span></span>}
              {spoc.length > 0 && spoc.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{ bg.bg_name }</Link></span>)})}
              {teacher.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As Teacher</span> : <span></span>}
              {teacher.length > 0 && teacher.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{ bg.bg_name }</Link></span>)})}
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
          </div>
          </div>
    </>
  );
}

export async function getServerSideProps({ params: { user_id } }) {
  const res = await fetch(`${baseUrl}/api/user/${user_id}`)
  const data = await res.json()
  console.log(data);
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
