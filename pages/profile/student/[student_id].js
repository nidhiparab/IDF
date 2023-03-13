import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import Link from 'next/link';
import CustomModal from '../../../components/Modals/CustomModal';
import { useState } from 'react';
import { useSession } from "next-auth/react";


const StudentProfile = ({ student, grades }) => {
  // Student Object
  //   student_id
  //   bg_id
  //   bg_name
  //   f_name
  //   m_name
  //   l_name
  //   dob
  //   gender
  //   grade
  const { data: session, status } = useSession()
  const isHod = session?.user.hod.includes(student.bg_id)
  const [update, setUpdate] = useState(false);
  const [f_name, setF_name] = useState(student?.f_name);
  const [m_name, setM_name] = useState(student?.m_name);
  const [l_name, setL_name] = useState(student?.l_name);
  const [dob, setDob] = useState(student?.dob);
  const [grade, setGrade] = useState(student?.grade);
  const [gender, setGender] = useState(student?.gender);
  const [Formf_name, setFormF_name] = useState(student?.f_name);
  const [Formm_name, setFormM_name] = useState(student?.m_name);
  const [Forml_name, setFormL_name] = useState(student?.l_name);
  const [Formdob, setFormDob] = useState(student?.dob);
  const [Formgrade, setFormGrade] = useState(student?.grade);
  const [Formgender, setFormGender] = useState(student?.gender);
  const [bg_name, setBg_name] = useState(student?.bg_name);
  const [error, setError] = useState('');


  const handleUpdateSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send to server
    const data = { student_id: student.student_id, f_name, m_name, l_name, dob, gender, grade };

    // Use fetch to make a POST request to server endpoint

    const response = await fetch("/api/student/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await response.json();

    if (res.error) return setError(res.error)
    else {
      alert('Updated Successfully')
      setUpdate(false)
      setF_name(f_name)
      setM_name(m_name)
      setL_name(l_name)
      setGrade(grade)
      setGender(gender)
      setDob(dob)

    }


  };


  return (
    <>
      {/* Update Form */}
      <CustomModal show={update} onClose={() => setUpdate(false)} left='15%' >
        <div className="fixed justify-center w-2/3 bg-white shadow-lg">
          <div className="p-6      ">

            <h3 className="text-3xl font-extrabold text-blue-600 mb-3">Update Details</h3>




            <form onSubmit={handleUpdateSubmit} >

              <div className="flex flex-wrap  ">
                <div className="w-1/2 pr-4 mt-4">
                  <label className="text-xl font-bold text-blue-600 mb-2">First Name</label>
                  <input className="border border-black-600 w-full p-2 bg-white" type="text" value={Formf_name} onChange={(e) => setFormF_name(e.target.value)} />
                </div>
                <div className="w-1/2 pl-4 mt-4">
                  <label className="text-xl font-bold text-blue-600 mb-2">Middle Name</label>
                  <input className="border border-black-600 w-full p-2 bg-white" type="text" value={Formm_name} onChange={(e) => setFormM_name(e.target.value)} />
                </div>
                <div className="w-1/2 pr-4 mt-4">
                  <label className="text-xl font-bold text-blue-600 mb-2">Last Name</label>
                  <input className="border border-black-600 w-full p-2 bg-white" type="text" value={Forml_name} onChange={(e) => setFormL_name(e.target.value)} />
                </div>
                <div className="w-1/2 pl-4 mt-4">
                  <label className="text-xl font-bold text-blue-600 mb-2">DOB</label>
                  <input className="border border-black-600 w-full p-2 bg-white" type="date" value={Formdob} onChange={(e) => setFormDob(e.target.value)} />
                </div>
                <div className="w-1/2 pl-4 mt-4">
                  <label className="text-xl font-bold text-blue-600 mb-2">Gender</label>
                  <input className="border border-black-600 w-full p-2 bg-white" type="text" value={Formgender} onChange={(e) => setFormGender(e.target.value)} />
                </div>
                <div className="w-1/2 pr-4 mt-4">
                  <label className="text-xl font-bold text-blue-600 mb-2">Class</label>
                  <input className="border border-black-600 w-full p-2 bg-white" type="text" value={Formgrade} onChange={(e) => setFormGrade(e.target.value)} />
                </div>
              </div>
              <br />
              <button className="bg-blue-500 text-white p-2 w-full hover:bg-blue-700" type='submit'>Submit</button>

              {error ? <span>{error}</span> : <></>}


            </form>
          </div>    </div>
      </CustomModal>

      <div className='bg-blue-600 flex justify-center text-center h-60'>
        <span className='m-auto text-5xl text-white font-extrabold'>Student Profile Page</span>
      </div>
      <div className="m-20 p-20 items-center shadow-2xl shadow-slate-700 rounded-2xl">
        <div className=' text-2xl'>
          <div className='justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Name</h3>
            <span className='mt-auto mb-2'>{f_name} {m_name} {l_name}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Date Of Birth</h3>
            <span className='mt-auto mb-2'>{dob}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Class</h3>
            <span className='mt-auto mb-2'>{grade}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Gender</h3>
            <span className='mt-auto mb-2'>{gender}</span>
          </div>
        </div>
        <div>
          {(isHod || session?.user?.isAdmin) ? <button className='mt-auto mb-2 text-2xl font-bold text-blue-600 border-2 border-blue-600 rounded-lg py-2 px-4 hover:bg-blue-600 hover:text-white' onClick={() => {
            setUpdate(true); 
            setFormF_name(f_name);
            setFormM_name(m_name);
            setFormL_name(l_name);
            setFormDob(dob);
            setFormGrade(grade);
            setFormGender(gender);
          }}>Update Profile</button> : <></>}
        </div>

        <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
          <h3 className='text-3xl font-bold text-blue-600  mt-auto mb-3'>Results</h3>

          <table className="table-auto w-5/6 mx-auto">
            <thead>
              <tr className="bg-blue-600 text-gray-100">
                <th className="px-4 py-2">Grade Id</th>
                <th className="px-4 py-2">Balgurukul Id</th>
                <th className="px-4 py-2">Exam</th>
                <th className="px-4 py-2">Class</th>
              </tr>
            </thead>

            <tbody>
              {grades?.map((grade) => {
                return (
                  <tr key={grade.grade_id} className="bg-white text-gray-700 ">
                    <td className="border px-4 py-2"><Link href={`/grade/${grade.grade_id}`} >{grade.grade_id}</Link></td>
                    <td className="border px-4 py-2"><Link href={`/balgurukul/${grade.bg_id}`} >{grade.bg_id}</Link></td>
                    <td className="border px-4 py-2">{grade.exam}</td>
                    <td className="border px-4 py-2">{grade.grade}</td>
                  </tr>
                )
              })}
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
  return {
    props: {
      student: data.student,
      grades: data.grades.result,
    },
  }
}

export default StudentProfile;
