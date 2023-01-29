import { loadStaticPaths } from 'next/dist/server/dev/static-paths-worker'
import executeQuery from '../../../lib/db'

export default async function byUserId(req, res) {
  const { user_id } = req.query

  let user = await executeQuery({
    query: `SELECT user.*, auth.email FROM user JOIN auth ON user.user_id = auth.user_id WHERE user.user_id = ?;`,
    values: [user_id]
  })

  if (user.length == 1) {
    user = user[0]
  } else {
    res.json({ error: "User not found" })
  }

  let hod = [];
  let spoc = [];
  let teacher = [];

  let hodData = await executeQuery({
    query: `SELECT bg_id FROM hod where user_id=? `,
    values: [user.user_id]
  })

  for (let i = 0; i < hodData.length; i++) {
    let bg_id = hodData[i].bg_id;
    let hodBg = await executeQuery({
      query: `SELECT bg_name FROM bg where bg_id=? `,
      values: [bg_id]
    });
    if (hodBg.length == 1) {
      hod.push({ bg_id, bg_name: hodBg[0].bg_name });
    }
  }


  let spocData = await executeQuery({
    query: `SELECT bg_id FROM spoc where user_id=? `,
    values: [user.user_id]
  })
  for (let i = 0; i < spocData.length; i++) {
    let bg_id = spocData[i].bg_id;
    let spocBg = await executeQuery({
      query: `SELECT bg_name FROM bg where bg_id=? `,
      values: [bg_id]
    });
    if (spocBg.length == 1) {
      spoc.push({ bg_id, bg_name: spocBg[0].bg_name });
    }
  }
  let teacherData = await executeQuery({
    query: `SELECT bg_id FROM teacher where user_id=? `,
    values: [user.user_id]
  })

  for (let i = 0; i < teacherData.length; i++) {
    let bg_id = teacherData[i].bg_id;
    let teacherBg = await executeQuery({
      query: `SELECT bg_name FROM bg where bg_id=? `,
      values: [bg_id]
    });
    if (teacherBg.length == 1) {
      teacher.push({ bg_id, bg_name: teacherBg[0].bg_name });
    }
  }

  res.json({
    user,
    hod,
    spoc,
    teacher
  })

}