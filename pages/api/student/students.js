import executeQuery from '../../../lib/db'

export default async function allStudents(req, res) {

  let students = await executeQuery({
    query: `SELECT student.*,  bg.bg_name from student JOIN bg ON student.bg_id = bg.bg_id;`,
    values: []
  })
  
  res.json(students)
}