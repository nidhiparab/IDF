import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/idf-logo.png'
import { useSession, signOut } from 'next-auth/react'
// import styles from '../styles/Navbar.module.css'
// import printStyles from '../styles/Print.module.css'

const Navbar = () => {
  let { data: session } = useSession();
  let isAdmin = session ? session.user.isAdmin : false;
  let isHod = session ? session.user.hod.length > 0 : false;
  let isTeacher = session ? session.user.teacher.length > 0 : false;
  let isSpoc = session ? session.user.spoc.length > 0 : false;
  return (
    <div className="flex flex-col">
        <div className="flex flex-row justify-center">
              <Link className="flex flex-col m-2" href="https://www.idf.org.in" passHref>
                <Image
                  className="w-16 h-20 "
                  src={logo}
                  alt="idf-logo.png"
                />
              </Link>
              <div className="flex flex-col ">
                <h1 className="flex flex-row m-0 font-bold">Indian Development Foundation</h1>
                <p className="flex flex-row m-0 text-sm">
                  A National NGO committed to Health, Education, and Development
                </p>
                <p className="flex flex-row text-sm">
                  IDF - Organization in Special Consultative Status with the Economic and Social
                  Council since 2012.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center text-white items-center font-extrabold">
              <Link className="nav-link bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center" aria-current="page" href="/">
                Home
              </Link>

              {isAdmin ? <div className="dropdown nav-link bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center">
                <Link href="/balgurukul" className="nav-link dropbtn ">Balgurukul</Link>
                <div className="dropdown-content ">
                  <Link className="nav-link" href="/balgurukul/create" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New Balgurukul">
                    Create Balgurukul
                  </Link>
                  {/* <Link href="#">Link 3</Link> */}
                </div>
              </div> : <><Link className="nav-link " aria-current="page" href="/balgurukul">
                Balgurukul
              </Link></>}



              <Link className="nav-link nav-link bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center" aria-current="page" href="/profile/users">
                Users
              </Link>

              {(isAdmin || isHod || isTeacher || isSpoc) ? <div className="dropdown  bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center">
                <Link href="/profile/students" className="nav-link dropbtn">Students</Link>
                <div className="dropdown-content">
                  <Link className="nav-link" href="/profile/student/create" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New Student">
                    Create Student
                  </Link>
                </div>
              </div> : <><Link className="nav-link " aria-current="page" href="/profile/students">
                Students
              </Link></>}

              <Link className="nav-link nav-link bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center" aria-current="page" href="/grade">
                Grades
              </Link>

              {(() => {
                if (session) {
                  return (
                    <>
                      <Link className="nav-link  bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center" href={`/profile/user/${session.user.user_id}`}>
                        {session.user?.f_name}
                      </Link>
                      <Link className="nav-link  bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center" href="/" onClick={() => { signOut() }}>
                        SignOut
                      </Link>
                    </>
                  )
                }
                else {
                  return (
                    <>
                      <Link className="nav-link  bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center" href="/auth/login">
                        Login
                      </Link>
                      <Link className="nav-link  bg-blue-400 p-2 w-30 rounded-3xl m-2 text-center" href="/auth/register">
                        Register
                      </Link>

                    </>
                  )
                }

              })()}



            </div>
          </div>
  );
};
export default Navbar;
