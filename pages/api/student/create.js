import { getSession } from "next-auth/react"
import executeQuery from '../../../lib/db'

export default async function createStudent(req, res) {
  
  if(req.method !== 'POST') return res.status(405).json({error: "Method not allowed"})
  
  const session = await getSession({ req })
  if (!session) return res.status(401).redirect('/auth/login');
  if(!session?.user.isAdmin && (session?.user.hod?.includes(bg_id) || session?.user.teacher?.includes(bg_id)) ) return res.status(401).json({error: "Unauthorized"})
  
  let { bg_id, f_name, m_name, l_name, dob, gender, grade } = req.body;
  let count = await executeQuery({
    query: "SELECT COUNT(*) FROM `student`;",
    values: []
  })
  const student_id = parseInt(count[0]['COUNT(*)']) + 1;
  let student = await executeQuery({
    query: "INSERT INTO `student`(`student_id`, `bg_id`, `f_name`, `m_name`, `l_name`, `dob`, `gender`, `grade`) VALUES (?,?,?,?,?,?,?,?);",
    values: [student_id.toString(), bg_id, f_name, m_name, l_name, dob, gender, grade]
  })
  res.json({message: student.affectedRows == 1 ? "Student added successfully" : "Error adding student"})
}