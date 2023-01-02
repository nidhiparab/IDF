import { hash, compare } from 'bcryptjs';

export default async function bgById(req, res) {
  
  let a = await hash("qweqweqwe", 10)
  let b = await compare("qweqweqwe", "$2a$10$hPYg1XJKSglzcGk8A/U/Yug6KBpJVxYrqgujiaLgjhL199Ut3CpRa")
  res.send({a, b})
}
