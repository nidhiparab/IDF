import baseUrl from '../../helpers/baseUrl';
import React from 'react';


const GradeId = ({ grade }) => {
  // console.log(grade.grade_subjects);
  return (
    <div>
      {Object.keys(grade.grade_qualities).map(function (key) {
          let value = grade.grade_qualities[key];
          console.log(value);
          return <p key={key} >{key}: {value}</p>
        })}
      {Object.keys(grade.grade_subjects).map(function (key) {
          let value = grade.grade_subjects[key];
          console.log(value);
          return <p key={key} >{key}: {value}</p>
        })}
      {Object.keys(grade.grade_intrests).map(function (key) {
          let value = grade.grade_intrests[key];
          console.log(value);
          return <p key={key} >{key}: {value}</p>
        })}
      {Object.keys(grade.grade_specifics).map(function (key) {
          let value = grade.grade_specifics[key];
          console.log(value);
          return <p key={key} >{key}: {value}</p>
        })}
    </div>
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
