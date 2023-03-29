import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST, // sg2.mochahost.com
    // port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE, // idfbalgu_idf
    user: process.env.MYSQL_USER, //sakec
    password: process.env.MYSQL_PASSWORD //cekas@123
  }
});

export default async function executeQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}