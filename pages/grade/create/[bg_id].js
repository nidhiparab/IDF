import React from 'react';
import baseUrl from '../../../helpers/baseUrl';
import gradeConstants from '../../../lib/grades';
const CreateGrade = ({ bg, students }) => {
  return (
    <div>
      
    </div>
  );
}

export async function getServerSideProps({ params: { bg_id } }) {
  
  const bg_data = await fetch(`${baseUrl}/api/balgurukul/${bg_id}`)
  const stdnt = await fetch(`${baseUrl}/api/student/bg/${bg_id}`)
  const bg = await bg_data.json()
  const stdn = await stdnt.json()
  console.log(stdn);
  return {
    props: {
      bg,
      students: stdn,
    },
  }
}

export default CreateGrade;
