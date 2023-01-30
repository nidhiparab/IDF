import Link from 'next/link';
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
  return (
    <>
      {students.map(student => {
        return (<>

          <div className="m-20 p-5 items-center shadow-2xl shadow-slate-700 rounded-2xl" key={student.student_id}>
            <div className=' text-l flex flex-row justify-between'>
              <div className='flex flex-col'>
                <h3 className=' font-bold text-blue-600'>Name</h3>
                <span className='mt-auto mb-2'> {student?.f_name} {student?.m_name} {student?.l_name}</span>
              </div>
              <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
                <h3 className='text-l font-bold text-blue-600  mt-auto mb-3'>Class</h3>
                <span className='mt-auto mb-2'>{student.grade}</span>
              </div>
              <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
                <h3 className='text-l font-bold text-blue-600 mt-auto mb-3'>Balgurukul</h3>
                <Link href={`/balgurukul/${student.bg_id}`} className='mt-auto mb-2'>{student.bg_name}</Link>
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
