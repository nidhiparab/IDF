import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/idf-logo.png'
import { useSession, signOut } from 'next-auth/react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  let { data: session } = useSession();
  return (
    <nav>
      <div className={ `${styles.container} container` }>
        <div className={`${styles.navbar} navbar navbar-expand-lg navbar-light row `}>
          <div className="col col-lg-2">
            <div className="navbar-brand row">
              <Link className="col" href="https://www.idf.org.in" passHref>
                <Image
                  src={logo}
                  alt="idf-logo.png"
                />
              </Link>
              <div className=" col col-lg-2">
                <h1 className="row ">Indian Development Foundation</h1>
                <p className="row nav-text">
                  A National NGO committed to Health, Education, and Development
                </p>
                <p className="row nav-text">
                  IDF - Organization in Special Consultative Status with the Economic and Social
                  Council since 2012.
                </p>
              </div>
            </div>
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>

              <div className="dropdown">
                <Link href="/balgurukul" className="nav-link dropbtn">Balgurukul</Link>
                <div className="dropdown-content">
                  <Link className="nav-link" href="/balgurukul">
                    See all Balgurukuls
                  </Link>
                  <Link className="nav-link" href="/balgurukul/create" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New Balgurukul">
                    Create Balgurukul
                  </Link>
                  {/* <Link href="#">Link 3</Link> */}
                </div>
              </div>
              <Link className="nav-link" aria-current="page" href="/profile/users">
                Users
              </Link>
              <Link className="nav-link" aria-current="page" href="/profile/students">
                Students
              </Link>
              <Link className="nav-link" aria-current="page" href="/grade">
                Grades
              </Link>

              {(() => {
                if (session) {
                  return (
                    <>
                      <Link className="nav-link" href={`/profile/user/${session.user.user_id}`}>
                        {session.user?.f_name}
                      </Link>
                      <Link className="nav-link" href="/" onClick={() => { signOut() }}>
                        SignOut
                      </Link>
                    </>
                  )
                }
                else {
                  return (
                    <>
                      <Link className="nav-link" href="/auth/login">
                        Login
                      </Link>
                      <Link className="nav-link" href="/auth/register">
                        Register
                      </Link>

                    </>
                  )
                }

              })()}



            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
