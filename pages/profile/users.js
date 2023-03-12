import React from 'react';
import baseUrl from '../../helpers/baseUrl';
import styles from '../../styles/UserId.module.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
  
  const [userName, setUserName] = useState('');
  const [filter, setFilter] = useState(users);
  
  useEffect(() => {
    if(userName){
      let filtered_data = users.filter((user)=>{
        let fullName = user.f_name +" "+ user.m_name +" "+ user.l_name
        return fullName.toLowerCase().includes(userName.toLowerCase())
      })
      setFilter(filtered_data)
    } else{
      setFilter(users)
    }   
  }, [userName]);
  
  return (
    <>
      <div >
        <div className="ml-48 my-10 p-4 space-x-4">
          <input className={styles.filter_name}  type="text" placeholder='User Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
      
          <button className={styles.Rbtn} name='Reset' onClick={() => { setUserName('') }}>Reset Filters</button>
        </div>
      </div>
        {filter.map(user => {
          return (
            <>


              <div className="mx-32 mb-7 px-5 py-4 items-center shadow-l border-4 border-solid rounded-2xl" key={user.user_id}>
                <div className=' text-l'>
                  <div className='justify-between p-2'>
                    <h3 className='text-l font-bold text-blue-600  mt-auto mb-1'>{user?.title} {user?.f_name} {user?.m_name} {user?.l_name}</h3>
                  </div>
                  <div className=' my-auto w-auto flex flex-col items-start justify-between'>
                    <h3 className='text-m text-blue-500  mt-auto mb-3 ml-10'>{user.desgination}</h3>
                  </div>

                </div>
                <Link href={`/profile/user/${user.user_id}`} className='btn btn-primary ml-10' > Details </Link>
              </div>
            </>)
        })}
      </>
      );
}

      export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/user/users`)
      const data = await res.json()
      return {
        props: {
        users: data,
    },
  }
}

      export default Users;
