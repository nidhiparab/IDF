import executeQuery from '../../../lib/db';
import { getSession } from 'next-auth/react';

//------------API for adding new bg to database

export default async function addBG(req, res) {
  if (req.method != 'POST') {
    res.json({ 'message': 'This is a POST API' }).status(404);
  }
  const session = await getSession({ req })
  if (!session) return res.status(401).redirect('/auth/login');
  if(!session?.user.isAdmin ) return res.status(401).json({message: "Unauthorized"})
  const { bg_name,
    partnering_org,
    address,
    state,
    district,
    region,
    pincode,
    org_under_bg,
    phone,
    mail } = req.body;
  let soft_delete = 0;
  let stateData =  await executeQuery({
    // query: `SELECT * FROM 'bg_count' WHERE 'abbr'='${state}'`,
    query: 'SELECT * FROM bg_count WHERE `abbr`= ? ',
    values: [state]
  })
  
  stateData = stateData[0];
  let stateFull = stateData.state;
  let newCount = parseInt(stateData.count) + 1;
  let id = ((1000 + newCount) + "").slice(1)
  id = state + id;
  
  let updateCount = await executeQuery({
    query: "UPDATE `bg_count` SET `count`= `count` + 1 WHERE `abbr`=? ;",
    values: [state]
  })
  
  let insertData = await executeQuery({
    query: "INSERT INTO `bg`(`bg_id`, `bg_name`, `partnering_org`, `address`, `district`, `state`, `state_short`, `region`, `pincode`, `org_under_bg`, `phone`, `mail`, `soft_delete`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);",
    values: [id, bg_name, partnering_org, address, district, stateFull, state, region, pincode, org_under_bg, phone, mail, soft_delete]
  })
  
  res.json(updateCount, insertData)
  



}