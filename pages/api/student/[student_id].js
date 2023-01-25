import executeQuery from '../../../lib/db'

export default async function studentById(req, res) {
  let student_id = req.query.student_id;
  let student = await executeQuery({
    query: `SELECT * from student where student_id = ?;`,
    values: [student_id]
  })
  
  res.json(student[0])
}