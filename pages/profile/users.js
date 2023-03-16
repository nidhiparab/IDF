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
      <div className="justify-content-center ml-48 my-10">
          <input className={styles.filter_name} type="text" placeholder='Student Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <button className={styles.Rbtn} name='Reset' onClick={() => { setUserName('') }}>Reset Filters</button>
      </div>
      
      
        {filter.map(user => {
          return (
            <>


                <Link href={`/profile/user/${user.user_id}`} className='text-decoration-none ml-2' > 
              <div className="mx-32 mb-7 px-5 py-4 items-center shadow-l hover:bg-blue-600 hover:text-white border-4 border-solid rounded-2xl" key={user.user_id}>
                <div className=' text-l'>
                  <div className='justify-between p-2'>
                    <h4 className='text-l  font-extrabold mt-auto mb-1'>{user?.title} {user?.f_name} {user?.m_name} {user?.l_name}</h4>
                  </div>
                  <div className=' my-auto w-auto flex flex-col items-start justify-between'>
                  <h6 className='text-l font-extrabold mt-auto mb-4 ml-2'><span className="font-bold text-sm font-mono">Designation:</span> {user.desgination}</h6>
                  </div>

                </div>
              </div>
                </Link>
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
