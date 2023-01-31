import { getSession } from "next-auth/react"
import executeQuery from "../../lib/db"
import { hash } from 'bcryptjs';


export default async function Test(req, res) {
  let hashs = await hash("IDF@pass2023", 10)
  res.json({hashs})
}