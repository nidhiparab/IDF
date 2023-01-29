
import executeQuery from '../../../lib/db';
import { getSession } from 'next-auth/client';
//----------------API to delete bgk------------------


export default async function deleteBG(req, res) {
  if (req.method != 'POST') {
    res.json({ 'message': 'This is a POST API' });
  }
  const session = await getSession({ req })
  if (!session) return res.status(401).redirect('/auth/login');
  if(!session?.user.isAdmin ) return res.status(401).json({message: "Unauthorized"})
  const{ bg_id } = req.body
  let state = bg_id.split(0, 1)[0]
  let updateCount = await executeQuery({
    query: "UPDATE `bg_count` SET `delete_count`= `delete_count` + 1 WHERE `abbr`=? ;",
    values: [state]
  })
  
  let updateBG = await executeQuery({
    query: "UPDATE `bg` SET `soft_delete`= 1 WHERE `bg_id`=? ;",
    values: [bg_id]
  })
  res.json(updateCount, updateBG)
  
  
}