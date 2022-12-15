import executeQuery from '../../../lib/db';


//------------API for adding new bg to database

export default async function addBG(req, res) {
  if (req.method != 'POST') {
    res.json({ 'message': 'This is a POST API' }).status(404);
  }

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
    query: "UPDATE `bg` SET `bg_name`='?',`partnering_org`='?',`address`='?',`district`='?',`state`='?',`state_short`='?',`region`='?',`pincode`='?',`org_under_bg`='?',`phone`='?',`mail`='?',`soft_delete`='?' WHERE `bg_id`='?'",
    values: [bg_name, partnering_org, address, district, state, state_short, region, pincode, org_under_bg, phone, mail, soft_delete, bg_id]
  })

  res.json(updateData)




}