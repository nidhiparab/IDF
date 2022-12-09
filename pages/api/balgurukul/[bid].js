import executeQuery from '../../../config/db'//created demo database for iteration

export default async function bgById (req,res) {
    const {bid} = req.query

    let result = await executeQuery({
      query: `SELECT * FROM bg where bg_id='${bid}'`,
      values: []
    })
  res.json(result).status(200)
    
}

