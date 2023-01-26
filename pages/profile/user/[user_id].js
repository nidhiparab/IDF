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
