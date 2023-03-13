import executeQuery from '../../../lib/db'
import baseUrl from '../../../helpers/baseUrl'

export default async function studentById(req, res) {
  let student_id = req.query.student_id;
  let student = await executeQuery({
    query: `SELECT * from student where student_id = ?;`,
    values: [student_id]
  })
  let bg_id = student[0].bg_id;
  let bg_name = await executeQuery({
    query: `SELECT bg_name from bg where bg_id = ?;`,
    values: [bg_id]
  })
  
  student[0].bg_name = bg_name[0].bg_name;
  
  const result = await fetch(`${baseUrl}/api/student/grade/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: student_id,
        min: true
      }),
    });
  res.json({student: student[0], grades: await result.json()})
}