import Link from 'next/link';
import React from 'react';
import baseUrl from '../../helpers/baseUrl';
import { useState, useEffect } from 'react';

const Students = ({ students }) => {
  // Student Object
  //   student_id
  //   bg_id
  //   f_name
  //   m_name
  //   l_name
  //   dob
  //   gender
  //   grade
  
  const [userName, setUserName] = useState('');
  const [filter, setFilter] = useState(students);
  
  useEffect(() => {
    if(userName){
      let filtered_data = students.filter((user)=>{
        let fullName = user.f_name +" "+ user.m_name +" "+ user.l_name
        return fullName.toLowerCase().includes(userName.toLowerCase())
      })
      setFilter(filtered_data)
    } else{
      setFilter(students)
    }   
  }, [userName]);
  
  return (
    <>
      <div>
        <div className="ml-48 my-10 p-4 d-inline-flex space-x-4">
          <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder='Student Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <br />
      
          <button className="bg-blue-900 hover:bg-blue-500 text-white font-bold px-4 rounded" name='Reset' onClick={() => { setUserName('') }}>Reset Filters</button>
        </div>
      </div>
      {filter.map(student => {
        return (<>

          <div className="mx-32 mb-7 px-5 py-4 items-center shadow-2xl shadow-slate-700 rounded-2xl" key={student.student_id}>
            <div className=' text-l flex flex-row justify-evenly'>
              <div className='flex flex-row justify-start align-items-center'>
                <h3 className=' font-bold text-blue-600  mb-2 self-center'>{student?.f_name} {student?.m_name} {student?.l_name}</h3>
              </div>
              <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
              <Link href={`/balgurukul/${student.bg_id}`} className='mt-auto mb-2' passHref>
                <h3 className='text-m font-bold text-blue-600 mt-auto mb-3'>{student.bg_name}</h3>
                </Link>
              </div >
              <Link href={ `/profile/student/${student.student_id}` } className='btn btn-primary h-2/3' > Details </Link>
            </div>
          </div>

        </>)
      })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/student/students`)
  const data = await res.json()
  return {
    props: {
      students: data,
    },
  }
}

export default Students;
