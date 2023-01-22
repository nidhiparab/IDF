import executeQuery from '../../../lib/db'

export default async function byUserId(req, res) {
  const { user_id } = req.query

  let user = await executeQuery({
    query: `SELECT user.*, auth.email FROM user JOIN auth ON user.user_id = auth.user_id WHERE user.user_id = ?;`,
    values: [user_id]
  })
  
  res.json(user[0])

}