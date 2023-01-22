import { getSession } from "next-auth/react"
import executeQuery from "../../../lib/db"
export default async function Test(req, res) {
  // if (req.method !== "POST") {
  //   res.json({ message: "This is POST API" })
  //   return;
  // }
  const session = await getSession({ req })
  if (!session) {
    res.redirect('/auth/login');
    return;
  }
  const {
    role,
    bg_id,
    user_id,
    add } = req.body;
  console.log(session.user);

  if ((role === 'hod' && !session.user.isAdmin)) {
    res.json({ message: "You don't have Permission of this action" })
    return;
  }
  if (!session.user.hod?.includes(bg_id) || session.user.isAdmin) {
    res.json({ message: "You don't have Permission of this action" })
    return;
  }

  if (add) {
    // check if bg_id and user_id already exists in role table
    let alreadyExsist = await executeQuery({
      query: "SELECT * FROM `" + role + "` WHERE `bg_id`=? AND `user_id`=?;",
      values: [bg_id, parseInt(user_id)]
    })
    if (alreadyExsist.length > 0) {
      res.json({ message: "User already has the role in that BG" })
      return;
    }
    let insert = await executeQuery({
      query: "INSERT INTO `" + role + "` (`bg_id`, `user_id`) VALUES (?, ?);",
      values: [bg_id, parseInt(user_id)]
    })


  } else {
    //delete
    let deleteRole = await executeQuery({
      query: "DELETE FROM `" + role + "`WHERE `bg_id`=? AND `user_id`=?;",
      values: [bg_id, parseInt(user_id)]
    })
  }
  res.json({ message: 'success' })
}