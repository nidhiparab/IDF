import executeQuery from '../../../../lib/db'

export default async function studentByBg(req, res) {
  let bg_id = req.query.bg_id;
  let students = await executeQuery({
    query: `SELECT * from student where bg_id = ?;`,
    values: [bg_id]
  })
  
  res.json(students)
}