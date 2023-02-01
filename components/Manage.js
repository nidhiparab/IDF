import React from 'react';
import CustomModal from './Modals/CustomModal';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import baseUrl from '../helpers/baseUrl';


const Manage = ({ user, users, users_list, bg_id }) => {
  let title = user.charAt(0).toUpperCase() + user.slice(1);
  let plural = title + "s";
  const [actualUsers, setActualUsers] = useState(users);
  users.map((user, i) => {
    users_list = users_list.filter((user2) => user2.user_id != user.user_id)
  })
  
  const [filter, setFilter] = useState(users_list);
  const [name, setName] = useState("");
  
  useEffect(() => {
    if(name){
      let filtered_data = users_list.filter((user)=>{
        let fullName = user.f_name +" "+ user.m_name +" "+ user.l_name
        return fullName.toLowerCase().includes(name.toLowerCase())
      })
      setFilter(filtered_data)
    } else{
      setFilter(users_list)
    }   
  }, [name]);

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
    
    let filUserslist = filter;
    filUserslist.push(actualUsers.find(user => user.user_id == user_id))
    setFilter(filUserslist);
    let filActualUsers = actualUsers.filter((user) => user.user_id != user_id);
    setActualUsers(filActualUsers);
    
    
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
    let filActualUsers = actualUsers;
    filActualUsers.push(filter.find(user => user.user_id == user_id))
    setActualUsers(filActualUsers);
    let filUserslist = filter.filter((user) => user.user_id != user_id);
    setFilter(filUserslist);
    
    if (res2.error) {
      console.log(res2.error);
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CustomModal show={isOpen} onClose={() => { setIsOpen(false) }} top='10%' left='20%' bottom='10%'>
        <div className="p-5 text-center">
        <div className='bg-blue-600 flex justify-center text-center h-20 text-white font-extrabold'>
        <h1 className='m-auto text-5xl text-white font-extrabold'>Manage {title}</h1>
      </div>

          <div className='flex flex-row p-5' >
            <div className='flex flex-col overflow-y-auto h-30'>
            <h1 className=''>{ plural }</h1>
              {actualUsers?.map((user, i) => {
                return (
                  <div key={i} className="flex flex-row bg-yellow-100 p-2 justify-end m-1">
                    <Link className="flex flex-col p-1 ml-2 text-black font-semibold text-decoration-none" href={`/profile/user/${user.user_id}`} >{user.f_name} {user.m_name} {user.l_name} </Link>
                    <button className="flex flex-col bg-red-500 text-white p-1 ml-2 rounded-xl" onClick={(e) => { e.preventDefault;  remove(user.user_id)} }>Remove</button>
                  </div>
                )
              })}
            </div>
            
            <div className='flex flex-col' >
            <div className="">
            <h1 className=''>List of All Users</h1>
        <input className="flex flex-row w-100 bg-white border rounded-xl p-2 justify-end m-1" type="text" placeholder='Search by Name' 
        value={name} 
        onChange={(e) => {
          setName(e.target.value);}}
         />
        </div>
            
            <div className='flex flex-col overflow-y-auto h-30'>
            
              {filter?.map((user, i) => {
                return (
                  <div className="flex flex-row bg-yellow-100 p-2 justify-end m-1" key={i}>
                  
                  <Link className="flex flex-col p-1 ml-2 text-black font-semibold text-decoration-none " href={`/profile/user/${user.user_id}`} >{user.f_name} {user.m_name} {user.l_name} </Link>
                 <button className="flex flex-col bg-green-500 text-white p-1 ml-2 rounded-xl" onClick={(e) => { e.preventDefault;  add(user.user_id)}}>Add</button>
                  </div>
                )
              })}
            </div>
            </div>
          </div>
        </div>
      </CustomModal>

      <button className='bg-slate-200 rounded-full font-bold mt-100 p-2 text-sm' onClick={() => setIsOpen(true)}>Manage</button>
    </div>
  );
}

export default Manage;
