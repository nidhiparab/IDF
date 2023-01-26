import React from 'react';
import baseUrl from '../../../helpers/baseUrl';

const UserProfile = ({ user }) => {
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
            <span className='mt-auto mb-2'>bgk name</span>
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
  return {
    props: {
      user: data,
    },
  }
}

export default UserProfile;
