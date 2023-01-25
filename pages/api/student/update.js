import { getSession } from "next-auth/react"
import executeQuery from '../../../lib/db'

export default async function updateStudent(req, res) {
  
  if(req.method !== 'POST') return res.status(405).json({message: "Method not allowed"})
  
  const session = await getSession({ req })
  if (!session) return res.status(401).redirect('/auth/login');
  if(!session?.user.isAdmin && (session?.user.hod?.includes(bg_id) || session?.user.teacher?.includes(bg_id)) ) return res.status(401).json({message: "Unauthorized"})
  
  let { student_id, f_name, m_name, l_name, dob, gender, grade } = req.body;
  
  let student = await executeQuery({
    query: "UPDATE `student` SET `f_name`=?,`m_name`=?,`l_name`=?,`dob`=?,`gender`=?,`grade`=? WHERE `student_id`=?;",
    values: [f_name, m_name, l_name, dob, gender, grade, student_id]
  })
  res.json({message: student.affectedRows == 1 ? "Student updated successfully" : "Error updating student"})
}