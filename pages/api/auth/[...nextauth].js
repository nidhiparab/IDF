import NextAuth from "next-auth"
import executeQuery from '../../../lib/db'
import { compare } from 'bcryptjs';
import CredentialProvider from "next-auth/providers/credentials"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
      name: 'credentials',  
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email'
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: async (credentials) => {
        let dbUser = await executeQuery({
          query: `SELECT * FROM auth where email=? LIMIT 1`,
          values: [credentials.email]
        })

        if (dbUser.length < 0) return null; // User not fount

        if (! await compare(credentials.password, dbUser[0].hash)) return null;  // Passwords do not match

        let userData = await executeQuery({
          query: `SELECT * FROM user where user_id=? LIMIT 1`,
          values: [dbUser[0].user_id]
        })
        let isAdmin = await executeQuery({
          query: `SELECT * FROM admin where user_id=? LIMIT 1`,
          values: [dbUser[0].user_id]
        })
        if (isAdmin.length > 0) isAdmin = true;
        let hodData = await executeQuery({
          query: `SELECT bg_id FROM hod where user_id=? `,
          values: [dbUser[0].user_id]
        })
        let spocData = await executeQuery({
          query: `SELECT bg_id FROM spoc where user_id=? `,
          values: [dbUser[0].user_id]
        })
        let teacherData = await executeQuery({
          query: `SELECT bg_id FROM teacher where user_id=? `,
          values: [dbUser[0].user_id]
        })

        if (userData.length < 0) return null; // User Data not found
        let user = {
          email: dbUser[0].email,
          ...userData[0],
          isAdmin,
          hod:hodData.map(x => x.bg_id),
          spoc:spocData.map(x => x.bg_id),
          teacher:teacherData.map(x => x.bg_id),
        }
        return user
      },
    })
  ],
  callbacks: {
    
    async signIn({ }) {
      return true;
    },
    
    jwt: ({ token, user }) => {
      if (user) {
        token = {
          ...user
        }
      }
      return token
    },
    session: ({ token, session }) => {
      session.user = {
        ...token
      }
      return session
    },
  },
  secret: 'SomeSecretShhhuu',
  jwt: {
    secret: 'SomeSecretShhhuu',
    encryption: true
  }
})
