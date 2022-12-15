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
    district,
    region,
    pincode,
    org_under_bg,
    phone,
    mail } = req.body;
  let soft_delete = 0;

  let updateData = await executeQuery({
    query: "INSERT INTO `bg`(`bg_id`, `bg_name`, `partnering_org`, `address`, `district`, `state`, `state_short`, `region`, `pincode`, `org_under_bg`, `phone`, `mail`, `soft_delete`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);",
    values: [id, bg_name, partnering_org, address, district, stateFull, state, region, pincode, org_under_bg, phone, mail, soft_delete]
  })
  
  res.json( updateData)
  



}