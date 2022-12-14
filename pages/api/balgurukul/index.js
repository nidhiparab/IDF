import executeQuery from '../../../lib/db'

//--------------------API for getting bgk from database--------------

export default async function getAllBG(req, res) {
  let result = await executeQuery({
    query: 'SELECT * FROM bg where `soft_delete` = 0',
    values: []
  })
  res.json(result)
}

