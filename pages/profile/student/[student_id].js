import React from 'react';
import baseUrl from '../../../helpers/baseUrl';

const StudentProfile = ({ student, grades }) => {
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
      
    <div className='bg-blue-600 flex justify-center text-center h-60'>
        <span className='m-auto text-5xl text-white font-extrabold'>Student Profile Page</span>
      </div>
      <div className="m-20 p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl">
      <div className=' text-2xl'>
          <div className='justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Name</h3>
            <span className='mt-auto mb-2'>{student?.f_name} {student?.m_name} {student?.l_name}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>DOB</h3>
            <span className='mt-auto mb-2'>{student.dob}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Class</h3>
            <span className='mt-auto mb-2'>{student?.grade}</span>
          </div>
          </div>
          
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Results</h3>
            <table className="table-auto w-5/6 mx-auto ">
  <thead>
    <tr className="bg-gray-300 text-gray-700">
      <th className="px-4 py-2">Grade Id</th>
      <th className="px-4 py-2">Balgurukul Id</th>
      <th className="px-4 py-2">Exam</th>
      <th className="px-4 py-2">Class</th>
    </tr>
  </thead>
  
  <tbody>
    <tr className="bg-white text-gray-700">
      <td className="border px-4 py-2">{grades?.exam}</td>
      <td className="border px-4 py-2">Row 1, Cell 2</td>
      <td className="border px-4 py-2">Row 1, Cell 3</td>
    </tr>
  </tbody>
</table>
          </div>
      
     
</div>
    </>
  );
}

export async function getServerSideProps({ params: { student_id } }) {
  const res = await fetch(`${baseUrl}/api/student/${student_id}`)
  const data = await res.json()
  console.log(data.grades.result);
  return {
    props: {
      student: data.student,
      grades: data.grades.result,
    },
  }
}

export default StudentProfile;
