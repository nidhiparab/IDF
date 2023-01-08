import executeQuery from '../../../lib/db'//created demo database for iteration

export default async function bgById(req, res) {
  const { bid } = req.query

  let bg_data = await executeQuery({
    query: `SELECT * FROM bg where bg_id=?`,
    values: [bid]
  })
  
  let hod_users = await executeQuery({
    query: `SELECT user.* from hod JOIN bg ON hod.bg_id = bg.bg_id JOIN user ON user.user_id = hod.user_id WHERE bg.bg_id =?`,
    values: [bid]
  })
  let spoc_users = await executeQuery({
    query: `SELECT user.* from spoc JOIN bg ON spoc.bg_id = bg.bg_id JOIN user ON user.user_id = spoc.user_id WHERE bg.bg_id =?`,
    values: [bid]
  })
  let teacher_users = await executeQuery({
    query: `SELECT user.* from teacher JOIN bg ON teacher.bg_id = bg.bg_id JOIN user ON user.user_id = teacher.user_id WHERE bg.bg_id =?`,
    values: [bid]
  })
  let data = {
    ...bg_data[0],
    hod_users: [...hod_users],
    spoc_users: [...spoc_users],
    teacher_users: [...teacher_users],
  }
  console.log(data);
  
  res.json({...bg_data[0]})

}

