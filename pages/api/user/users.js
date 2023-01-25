import executeQuery from '../../../lib/db'

export default async function allUsers(req, res) {

  let user = await executeQuery({
    query: `SELECT user.*, auth.email FROM user JOIN auth ON user.user_id = auth.user_id;`,
    values: []
  })
  
  res.json(user)
}