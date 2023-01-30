// https://idf-prod.vercel.app/

const baseUrl = process.env.NODE_ENV === 'production' ? "https://idf-prod.vercel.app/" : "http://localhost:3000"
export default baseUrl