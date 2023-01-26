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
      {user?.f_name}
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
