import executeQuery from '../../../../lib/db'

export default async function studentByBg(req, res) {
  let bg_id = req.query.bg_id;
  let students = await executeQuery({
    query: `SELECT student.* , bg.bg_name from student JOIN bg ON student.bg_id = bg.bg_id where student.bg_id = ?;`,
    values: [bg_id]
  })
  
  res.json(students)
}