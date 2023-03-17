// import { getSession } from "next-auth/react"
import { getToken } from "next-auth/jwt";
import executeQuery from "../../../lib/db"
import { hash } from 'bcryptjs';


export default async function Test(req, res) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  if (!token && !token.isAdmin) {
    res.status(401).json({ message: "Unauthorized" })
  }
  
  const { id } = req.query;
  let alreadyAdmin = await executeQuery({
    query: `SELECT * FROM admin WHERE user_id = ?`,
    values: [id]
  })
  if(alreadyAdmin.length == 0) 
    return res.status(200).send("Already not an admin" )
  let user = await executeQuery({
    query: `DELETE FROM admin WHERE user_id = ?`,
    values: [id]
  })
  
  console.log(token);
  res.status(200).send("Successfuly removed as Admin")
}