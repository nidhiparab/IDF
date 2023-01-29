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

      {users.map(user => {
        return (
          <>
            <div className="mx-20 my-10 p-10 items-center shadow-2xl shadow-slate-700 rounded-2xl">
              <div className=' text-l'>
                <div className='justify-between p-2'>
                  <h3 className='text-l font-bold text-blue-600  mt-auto mb-1'>{user?.title} {user?.f_name} {user?.m_name} {user?.l_name}</h3>
                </div>
                <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
                  <h3 className='text-l font-bold text-blue-600  mt-auto mb-3'>Designation</h3>
                  <span className='mt-auto mb-2'>{user.desgination}</span>
                </div>

              </div>
            </div>
          </>)
      })}
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
