import React from 'react';
import baseUrl from '../../helpers/baseUrl';
import styles from '../../styles/UserId.module.css'

const Users = ({ users }) => {
  // user Object
  //   desgination
  //   email
  //   f_name
  //   l_name
  //   m_name
  //   mob
  //   qualification
  //   title
  //   user_id
  console.log(users);
    return (
    <>
     
        {users.map(user => { return (
        
        <>
       
        <div classname="">
        { user.f_name }
        </div>
        </>)  })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/user/users`)
  const data = await res.json()
  console.log(data);
  return {
    props: {
      users: data,
    },
  }
}

export default Users;
