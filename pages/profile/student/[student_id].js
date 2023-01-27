import React from 'react';
import baseUrl from '../../../helpers/baseUrl';

const StudentProfile = ({ student }) => {
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
      {student?.f_name}
    </>
  );
}

export async function getServerSideProps({ params: { student_id } }) {
  const res = await fetch(`${baseUrl}/api/student/${student_id}`)
  const data = await res.json()
  console.log(data.grades);
  return {
    props: {
      student: data,
    },
  }
}

export default StudentProfile;
