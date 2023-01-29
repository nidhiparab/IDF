import React from 'react';
import baseUrl from '../../helpers/baseUrl';

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
  console.log(students);
    return (
    <>
        {students.map(student => { return (<>
                                           
          <div className="m-20 p-10 items-center shadow-2xl shadow-slate-700 rounded-2xl">
      <div className=' text-l'>
          <div className='justify-between p-2'>
            <h3 className='text-l font-bold text-blue-600  mt-auto mb-3'>Name</h3>
            <span className='mt-auto mb-2'> {student?.f_name} {student?.m_name} {student?.l_name}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-l font-bold text-blue-600  mt-auto mb-3'>Class</h3>
            <span className='mt-auto mb-2'>{student.grade}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-l font-bold text-blue-600 mt-auto mb-3'>Balgurukul</h3>
            <span className='mt-auto mb-2'>bgk name</span>
          </div>
          
          </div>
          </div>
                                           
                                           </>)  })}
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
