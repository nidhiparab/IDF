import executeQuery from '../../../lib/db'

export default async function allStudents(req, res) {

  let students = await executeQuery({
    query: `SELECT * from student;`,
    values: []
  })
  
  res.json(students)
}