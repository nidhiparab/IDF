import executeQuery from '../../../config/db'

export default async function bgGetAll(req, res) {
  let result = await executeQuery({
      query: 'SELECT * FROM bg',
      values: []
    })
  console.log(result[0]);
  res.json(result)
} 