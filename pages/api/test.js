import { getSession } from "next-auth/react"
export default async function Test(req, res) {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2))
    res.json({ message: "signed in" })
    return;
  } else {
    // Not Signed in
    res.json({ message: "not signed in", session })
    return;
  }
}
