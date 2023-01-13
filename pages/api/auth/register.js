import executeQuery from '../../../lib/db';
import { hash, compare } from 'bcryptjs';

//------------API for adding new bg to database

export default async function registerUser(req, res) {
  if (req.method != 'POST') {
    res.json({ 'message': 'This is a POST API' }).status(404);
  }

  const {email,
      password,
      designation,
      title,
      f_name,
      m_name,
      l_name,
      mob,
      qualification} = req.body
  
  let count = await executeQuery({
    query: "SELECT COUNT(*) FROM `auth`;",
    values: []
  })
  const user_id = parseInt(count[0]['COUNT(*)']) + 1;
  console.log(user_id);
  // // check email
  // let duplicateEmail = await executeQuery({
  //   query: "SELECT * FROM auth where `email`=?;",
  //   values: [email]
  // })
  // if(duplicateEmail)
  //   res.json({error: 'User with this Email Id already exists'})
  
  // let hashPass =  await hash(password, 10)
  
  // let insertDataAuth = await executeQuery({
  //   query: "INSERT INTO `auth`(`user_id`, `email`, `hash`) VALUES (?,?,?);",
  //   values: [user_id, email, hashPass]
  // })
  // let insertDataUser = await executeQuery({
  //   query: "INSERT INTO `user`(`user_id`, `desgination`, `title`, `f_name`, `m_name`, `l_name`, `mob`, `qualification`) VALUES (?,?,?,?,?,?,?,?);",
  //   values: [user_id, designation, title, f_name, m_name, l_name, mob, qualification]
  // })
  
  // console.log(insertDataAuth, insertDataUser);
  
  
  // let insertData = await executeQuery({
  //   query: "INSERT INTO `bg`(`bg_id`, `bg_name`, `partnering_org`, `address`, `district`, `state`, `state_short`, `region`, `pincode`, `org_under_bg`, `phone`, `mail`, `soft_delete`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);",
  //   values: [id, bg_name, partnering_org, address, district, stateFull, state, region, pincode, org_under_bg, phone, mail, soft_delete]
  // })
  
  res.json({error : ''})
  



}