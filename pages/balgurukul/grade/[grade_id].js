import React from 'react';
import baseUrl from '../../../helpers/baseUrl';

const StudentProfile = ({ student }) => {
    return (
    <>

    </>
  );
}

export async function getServerSideProps({ params: { grade_id } }) {
  const res = await fetch(`${baseUrl}/api/student/grade/${grade_id}`)
  const data = await res.json()
  console.log(data);
  return {
    props: {
      student: data.student,
      grades: data.grades.result,
    },
  }
}

export default StudentProfile;
