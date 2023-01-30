import { getSession } from "next-auth/react"
import executeQuery from "../../../lib/db"
import bcrypt from 'bcryptjs'
export default async function ResetPass(req, res) {
  
  if (req.method !== "POST") {
    res.status(401).json({ error: "This is POST API" })
    return;
  }
  const session = await getSession({ req })
  if (!session) {
    res.redirect('/auth/login');
    return;
  }
  const { user_id, user_email, newPass, oldPass } = req.body;
  console.log(user_id, user_email, newPass, oldPass);
  
  if (session.user.user_id !== user_id && session.user.email !== user_email) return res.status(401).json({error: "You don't have permission to change this user's password"})
  
  
  let old = await executeQuery({
    query: "SELECT `hash` FROM auth where email=? AND user_id=? LIMIT 1",
    values: [user_email, user_id]
  })
  
  if(old.length === 0) return res.status(401).json({error: "User not found"})
  let match = await bcrypt.compare(oldPass, old[0].hash)
  console.log(match, old[0].hash);
  if(!match) return res.status(401).json({error: "Old password is incorrect"})
  
  let hash = await bcrypt.hash(newPass, 10);
  
  
  let result = await executeQuery({
    query: "UPDATE `auth` SET `hash`=? WHERE `user_id`=? AND `email` = ?;",
    values: [hash, user_id, user_email]
  })
  res.status(200).json(result)
}