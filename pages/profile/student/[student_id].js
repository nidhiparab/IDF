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
      
      
      {/* <table class="table-auto mx-auto">
  <thead>
    <tr class="bg-gray-300 text-gray-700">
      <th class="px-4 py-2">Header 1</th>
      <th class="px-4 py-2">Header 2</th>
      <th class="px-4 py-2">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white text-gray-700">
      <td class="border px-4 py-2">Row 1, Cell 1</td>
      <td class="border px-4 py-2">Row 1, Cell 2</td>
      <td class="border px-4 py-2">Row 1, Cell 3</td>
    </tr>
    <tr class="bg-gray-100 text-gray-700">
      <td class="border px-4 py-2">Row 2, Cell 1</td>
      <td class="border px-4 py-2">Row 2, Cell 2</td>
      <td class="border px-4 py-2">Row 2, Cell 3</td>
    </tr>
  </tbody>
</table> */}

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
