import baseUrl from '../../helpers/baseUrl';
import React from 'react';
import student  from '../profile/student/[student_id]';


const GradeId = ({ grade }) => {
  // console.log(grade.grade_subjects);
  return (
<>

<div className='bg-blue-600 flex h-60'>
        {/* <span className='m-auto text-3xl text-white font-extrabold'>Student Profile Page</span> */}
        <div className='ml-30'>
          <div className='justify-between p-2'>
            <h3 className='text-4xl font-extrabold text-white mt-auto mb-3'>Name</h3>
            <span className='mt-auto mb-2'>{student?.f_name} {student?.m_name} {student?.l_name}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-4xl font-extrabold text-white mt-auto mb-3'>DOB</h3>
            <span className='mt-auto mb-2'>{student.dob}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-4xl font-extrabold  text-white  mt-auto mb-3'>Class</h3>
            <span className='mt-auto mb-2'>{student?.grade}</span>
          </div>
        </div>
      </div>
  
      <div className="justify-center p-10 text-justify ">
<h1 className=" text-3xl mb-2  text-blue-700 font-extrabold">Student's Qualities and Abilities</h1>
        {Object.keys(grade.grade_qualities).map(function (key) {
          let value = grade.grade_qualities[key];
          return <p key={key} className="text-gray-700 font-bold" >{key}: {value}</p>
        })}
      </div>
      <div className=" justify-center p-10 text-justify">
      <h1 className="mb-2 text-3xl text-blue-700 font-extrabold">Subject Knowledge - Based on previous exam or the teacher's observation</h1>
        {Object.keys(grade.grade_subjects).map(function (key) {
          let value = grade.grade_subjects[key];
          return <p key={key}  className="text-gray-700 mb-6  font-bold">{key}: {value}</p>
        })}
      </div>
      <div className=" justify-center p-10 text-justify  ">
      <h1 className="my-2 mb-2 text-3xl text-blue-700 font-extrabold">Interest and involvement in Co-curricular Activities</h1>
        {Object.keys(grade.grade_intrests).map(function (key) {
          let value = grade.grade_intrests[key];
          return <p key={key}  className="text-gray-700 font-bold">{key}: {value}</p>
        })}
      </div>
      <div className=" justify-center text-justify p-10 ">
      <h1 className="my-2 mb-2  text-4xl text-blue-700 font-extrabold">Specifics</h1>
        {Object.keys(grade.grade_specifics).map(function (key) {
          let value = grade.grade_specifics[key];
          return <p key={key}  className="text-gray-700 font-bold">{key}: {value}</p>
        })}
      </div>
      </>
    
  );
}

export async function getServerSideProps({ params: { grade_id } }) {
  const res = await fetch(`${baseUrl}/api/student/grade/${grade_id}`)
  const data = await res.json()
  return {
    props: {
      grade: data.result[0],
    },
  }
}

export default GradeId;



