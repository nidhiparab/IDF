import { getSession } from "next-auth/react"
import executeQuery from '../../../../lib/db'

export default async function createStudent(req, res) {
  
  if(req.method !== 'POST') return res.status(405).json({message: "Method not allowed"})
  let { student_id, bg_id, exam, grade ,grade_qualities, grade_subjects, grade_intrests, grade_specifics } = req.body;
  
  const session = await getSession({ req })
  // if (!session) return res.status(401).redirect('/auth/login');
  // if(!session?.user.isAdmin && (session?.user.hod?.includes(bg_id) || session?.user.teacher?.includes(bg_id)) ) return res.status(401).json({message: "Unauthorized"})
  
  let timestamp = new Date().toISOString();
  
  const grade_id = `${bg_id}-${student_id}-${exam}-${grade}`;
  
  let gradeInsert = await executeQuery({
    query: "INSERT INTO `grade`(`grade_id`, `student_id`, `bg_id`, `timestamp`) VALUES (?,?,?,?);",
    values: [grade_id, student_id, bg_id, timestamp]
  })
  
  if(gradeInsert.affectedRows != 1) return res.status(500).json({message: "Error adding grade", error: gradeInsert})
  
  let qualitiesInsert = await executeQuery({
    query: "INSERT INTO `grade_qualities`(`grade_id`, `Q1`, `Q2`, `Q3`, `Q4`, `Q5`, `Q6`, `Q7`, `Q8`, `Q9`, `Q10`, `Q11`, `Q12`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);",
    values: [grade_id, ...grade_qualities]
  })
  
  let subjectsInsert = await executeQuery({
    query: "INSERT INTO `grade_subjects`(`grade_id`, `Q1`, `Q2`, `Q3`, `Q4`, `Q5`) VALUES (?,?,?,?,?,?);",
    values: [grade_id, ...grade_subjects]
  })
  
  let intrestsInsert = await executeQuery({
    query: "INSERT INTO `grade_intrests`(`grade_id`, `Q1`, `Q2`, `Q3`, `Q4`, `Q5`, `Q6`, `Q7`, `Q8`, `Q9`) VALUES (?,?,?,?,?,?,?,?,?,?);",
    values: [grade_id, ...grade_intrests]
  })
  
  let specificsInsert = await executeQuery({
    query: "INSERT INTO `grade_specifics`(`grade_id`, `Q1`, `Q2`, `Q3`) VALUES (?,?,?,?);",
    values: [grade_id, ...grade_specifics ]
  })
  
  
  
  
  res.json({message: specificsInsert.affectedRows == 1 ? "Student graded successfully" : "Error grading student"})
}