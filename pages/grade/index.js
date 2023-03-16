import React from 'react';
import baseUrl from '../../helpers/baseUrl';
import Link from 'next/link';
import styles from '../../styles/GradeTable.module.css'
import Router, { useRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Index = ({ query: { bg_id, student_id, grade, exam, dateLesser, dateGreater } }) => {
  const [bg_id_val, setBg_id] = useState(bg_id ? bg_id : null);
  const [student_id_val, setStudent_id] = useState(student_id ? student_id : null);
  const [grade_val, setGrade] = useState(grade ? grade : null);
  const [exam_val, setExam] = useState(exam ? exam : null);
  const [dateLesser_val, setDateLesser] = useState(dateLesser ? dateLesser : null);
  const [dateGreater_val, setDateGreater] = useState(dateGreater ? dateGreater : null);
  let router = useRouter();
  const [grades, setGrades] = useState(null)

  useEffect(() => {
    let getData = async () => {
      
      Router.push(`/grade?bg_id=${bg_id_val}&student_id=${student_id_val}&grade=${grade_val}&exam=${exam_val}&dateLesser=${dateLesser_val}&dateGreater=${dateGreater_val}`)
      
      
      const res = await fetch(`${baseUrl}/api/student/grade/get`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bg_id: bg_id_val,
          student_id: student_id_val,
          grade: grade_val,
          exam: exam_val,
          dateLesser: dateLesser_val,
          dateGreater:
          dateGreater_val,
          min: true
        })
      })
      const data = await res.json()
      
      setGrades(data.result)
    }
    getData()
    return;
  }, [bg_id_val, dateGreater_val, dateLesser_val, exam_val, grade_val, student_id_val]);

  return (
    <div>
<div className="p-4 flex space-x-4">
  <input className="w-full px-3 py-2 border rounded bg-white placeholder-gray-500 text-black" type="text" placeholder="Student Id" value={student_id_val == null || student_id_val == 'null' ? '' : student_id_val} onChange={(e) => setStudent_id(e.target.value)} />
  <input className="w-full px-3 py-2 border rounded bg-white placeholder-gray-500 text-black" type="text" placeholder="Balgurukul Id" value={bg_id_val == null || bg_id_val == 'null' ? '' : bg_id_val} onChange={(e) => setBg_id(e.target.value)} />
  <input className="w-full px-3 py-2 border rounded bg-white placeholder-gray-500 text-black" type="text" placeholder="Exam" value={exam_val == null || exam_val == 'null' ? '' : exam_val} onChange={(e) => setExam(e.target.value)} />
  <input className="w-full px-3 py-2 border rounded bg-white placeholder-gray-500 text-black" type="text" placeholder="Class" value={grade_val == null || grade_val == 'null' ? '' : grade_val} onChange={(e) => setGrade(e.target.value)} />
  <input className={styles.calendar} type="date" value={dateGreater_val == null || dateGreater_val == 'null' ? '' : dateGreater_val} onChange={(e) => setDateGreater(e.target.value)} />
  <input className={styles.calendar} type="date" value={dateLesser_val == null || dateLesser_val == 'null' ? '' : dateLesser_val} onChange={(e) => setDateLesser(e.target.value)} />
  <button className="bg-blue-400 hover:bg-blue-600 rounded-3xl p-1 px-1 font-bold w-full text-white" name="Reset" onClick={() => { setStudent_id(null); setBg_id(null); setExam(null); setGrade(null); setDateGreater(null); setDateLesser(null) }}>Reset Filters</button>
</div>




      <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
        <h3 className='text-3xl font-bold text-blue-600 px-10 mt-auto mb-3'>Results</h3>

        <table className="table-auto w-5/6 mx-auto">
          <thead>
            <tr className="bg-blue-600 text-gray-100">
              <th className="px-4 py-2 w-1">Balgurukul Id</th>
              <th className="px-4 py-2 ">Grade</th>
              <th className="px-4 py-2">Student Id</th>
              <th className="px-4 py-2">Exam</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {grades?.map((grade) => {
              return (
                <tr key={grade.grade_id} className="bg-white text-gray-700 ">
                  <td className="border px-4 py-2 font-bold "><Link href={`/balgurukul/${grade.bg_id}`} className="text-decoration-none">{grade.bg_name}</Link></td>
                  <td className="border px-4 py-2 font-bold "><Link href={`/grade/${grade.grade_id}`} className="text-decoration-none" >{grade.f_name} {grade.m_name} {grade.l_name} - {grade.exam}</Link></td>
                  <td className="border px-4 py-2 font-bold"><Link href={`/profile/student/${grade.student_id}`} className="text-decoration-none">{grade.f_name} {grade.m_name} {grade.l_name}</Link></td>
                  <td className="border px-4 py-2">{grade.exam}</td>
                  <td className="border px-4 py-2">{grade.grade}</td>
                  <td className="border px-4 py-2">{grade.timestamp}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

Index.getInitialProps = async ({ query }) => {
  return { query };
}

// export async function getServerSideProps({ params: { student_id } }) {
//   const res = await fetch(`${baseUrl}/api/student/${student_id}`)
//   const data = await res.json()
//   console.log(data.grades.result);
//   return {
//     props: {
//       grades: data.grades.result
//     },
//   }
// }

export default Index;
