import React from 'react';
import CustomModal from './Modals/CustomModal';
import { useState } from 'react';
import Link from 'next/link';
import baseUrl from '../helpers/baseUrl';

const Manage = ({ user, users, users_list, bg_id }) => {
  let title = user.charAt(0).toUpperCase() + user.slice(1);
  
  users.map((user, i) => {
    users_list = users_list.filter((user2) => user2.user_id != user.user_id)
  })
  

  async function remove(user_id) {
    const res = await fetch(`${baseUrl}/api/user/role`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: user,
        user_id,
        bg_id,
        add: false
      }),
    });

    const res2 = await res.json(); //------------------show error
    console.log(res2);
    if (res2.error) {
      console.log(res2.error);
    }
  }
  async function add(user_id) {
    const res = await fetch(`${baseUrl}/api/user/role`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: user,
        user_id,
        bg_id,
        add: true
      }),
    });

    const res2 = await res.json(); //------------------show error
    console.log(res2);
    if (res2.error) {
      console.log(res2.error);
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CustomModal show={isOpen} onClose={() => { setIsOpen(false) }} top='10%' left='30%'>
        <div>
          <h1>Manage {title}</h1>
          <div className='flex justify-center items-center flex-row' >
            <div className='flex justify-center items-center flex-col'>
              {users?.map((user, i) => {
                return (
                  <div key={i}>
                    <Link href={`/profile/user/${user.user_id}`} >{user.f_name} {user.m_name} {user.l_name} </Link>
                    <button onClick={(e) => { e.preventDefault;  remove(user.user_id)} }>Remove</button>
                  </div>
                )
              })}
            </div>
            <div className='flex justify-center items-center flex-col'>
              {users_list?.map((user, i) => {
                return (
                  <div key={i}>
                    <Link href={`/profile/user/${user.user_id}`} >{user.f_name} {user.m_name} {user.l_name} </Link>
                    <button onClick={(e) => { e.preventDefault;  add(user.user_id)}}>Add</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </CustomModal>

      <button className='bg-slate-200 rounded-full font-bold mt-100 p-2 text-sm' onClick={() => setIsOpen(true)}>Manage</button>
    </div>
  );
}

export default Manage;
