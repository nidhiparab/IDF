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
          {/* <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Assigned Balgurukul</h3>
              {hod.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As HOD</span> : <span></span>}
              {hod.length > 0 && hod.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{ bg.bg_name }</Link></span>)})}
              {spoc.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As SPOC</span> : <span></span>}
              {spoc.length > 0 && spoc.map((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{ bg.bg_name }</Link></span>)})}
              {teacher.length > 0 ? <span className='text-2xl font-bold text-blue-600  mt-auto mb-3 ml-5'> As Teacher</span> : <span></span>}
              {teacher.length > 0 && hteachermap((bg) => { return (<span className='mt-auto mb-2 ml-10' key={bg.bg_id}><Link href={`/balgurukul/${bg.bg_id}`}>{ bg.bg_name }</Link></span>)})}
          </div> */}
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Class</h3>
            <span className='mt-auto mb-2'>{student?.grade}</span>
          </div>
          </div>
          </div>
      
      
      <table className="table-auto mx-auto">
  <thead>
    <tr className="bg-gray-300 text-gray-700">
      <th className="px-4 py-2">Header 1</th>
      <th className="px-4 py-2">Header 2</th>
      <th className="px-4 py-2">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-white text-gray-700">
      <td className="border px-4 py-2">Row 1, Cell 1</td>
      <td className="border px-4 py-2">Row 1, Cell 2</td>
      <td className="border px-4 py-2">Row 1, Cell 3</td>
    </tr>
    <tr className="bg-gray-100 text-gray-700">
      <td className="border px-4 py-2">Row 2, Cell 1</td>
      <td className="border px-4 py-2">Row 2, Cell 2</td>
      <td className="border px-4 py-2">Row 2, Cell 3</td>
    </tr>
  </tbody>
</table>

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
