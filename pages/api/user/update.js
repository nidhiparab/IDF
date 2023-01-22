import executeQuery from '../../../lib/db'
import { getSession } from "next-auth/react"
export default async function allUSers(req, res) {

  if (req.method !== "POST") return res.json({ message: "Method not allowed" })
  let {
    desgination, 
    title, 
    f_name, 
    m_name, 
    l_name, 
    mob, 
    qualification, 
    user_id } = req.body

  const session = await getSession({ req })
  // if (!session) return res.json({ message: "You should be logged in" })

  let sessionUserID = session?.user.user_id;

  // if (sessionUserID !== user_id) return res.json({ message: "You can't update other user's profile" })

  let user = await executeQuery({
    query: `UPDATE user SET desgination=?,title=?,f_name=?,m_name=?,l_name=?,mob=?,qualification=? WHERE user_id=?`,
    values: [desgination, title, f_name, m_name, l_name, mob, qualification, user_id]
  })

  res.json({message: user.affectedRows == 1 ? "success" : "failed"})
  // res.json({ message: user })
}