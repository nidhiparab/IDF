import { getSession } from "next-auth/react"
import executeQuery from "../../lib/db"
export default async function Test(req, res) {
  let result = await executeQuery({
    query: "SELECT *, DATE_FORMAT(`timestamp`, '%d-%m-%Y') as timestamp FROM `grade` WHERE `student_id` = '1';",
    values: []
  })
  res.json(result)
}