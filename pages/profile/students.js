import Link from 'next/link';
import React from 'react';
import styles from '../../styles/StudentId.module.css'
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
      <div className="justify-content-center ml-48 my-10">
          <input className={styles.filter_name} type="text" placeholder='Student Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <button className={styles.Rbtn} name='Reset' onClick={() => { setUserName('') }}>Reset Filters</button>
      </div>
      
      
      {filter.map(student => {
        return (<>

              
              <Link href={`/profile/student/${student.student_id}`} className='text-decoration-none ml-2' > 
              <div className="mx-32 mb-7 px-5 py-4 items-center shadow-l hover:bg-blue-600 hover:text-white border-4 border-solid rounded-2xl" key={student.student_id}>
                <div className=' text-l'>
                  <div className='justify-between p-2'>
                    <h2 className='text-l  font-extrabold mt-auto mb-1'>{student?.f_name} {student?.m_name} {student?.l_name}</h2>
                  </div>
                  <div className=' my-auto w-auto flex flex-col items-start justify-between '>
                        <h4 className='text-sm font-extrabold mt-auto mb-4 ml-2'><span className="font-bold font-mono text-sm">Balgurukul:</span> {student.bg_name}</h4>
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
  const res = await fetch(`${baseUrl}/api/student/students`)
  const data = await res.json()
  return {
    props: {
      students: data,
    },
  }
}

export default Students;
