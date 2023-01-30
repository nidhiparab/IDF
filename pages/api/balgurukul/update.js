import executeQuery from '../../../lib/db';
import { getSession } from 'next-auth/react';

//------------API for adding new bg to database

export default async function addBG(req, res) {
  if (req.method != 'POST') {
    res.json({ 'message': 'This is a POST API' }).status(404);
  }
  
  const session = await getSession({ req })
  if (!session) return res.status(401).redirect('/auth/login');
  if(!session?.user.isAdmin && (session?.user.hod?.includes(bg_id)) ) return res.status(401).json({message: "Unauthorized"})

  const { bg_id,
    bg_name,
    partnering_org,
    address,
    state,
    state_short,
    district,
    region,
    pincode,
    org_under_bg,
    phone,
    mail, 
    soft_delete} = req.body;

  let updateData = await executeQuery({
    query: "UPDATE `bg` SET `bg_name`=?,`partnering_org`=?,`address`=?,`district`=?,`state`=?,`state_short`=?,`region`=?,`pincode`=?,`org_under_bg`=?,`phone`=?,`mail`=?,`soft_delete`=? WHERE `bg_id`=?",
    values: [bg_name, partnering_org, address, district, state, state_short, region, pincode, org_under_bg, phone, mail, soft_delete, bg_id]
  })

  res.json(updateData)




}