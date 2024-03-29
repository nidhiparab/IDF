import Link from 'next/link'
import CustomModal from '../../components/Modals/CustomModal'
import baseUrl from '../../helpers/baseUrl'
import { useState } from 'react'
import styles from '../../styles/Balgurukul.module.css'
import Image from 'next/image'
import AdminButtons from '../../components/Admin/balgurukul/info'
import { SessionProvider, useSession } from "next-auth/react"
import Manage from '../../components/Manage'
import { useRouter } from 'next/router'

const Product = ({ balgurukul, students, users_list }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [openModal, setOpenModal] = useState(false)
  const [exam, setExam] = useState('')
  const [openModalGrade, setOpenModalGrade] = useState(false)
  const isHod = session?.user.hod.includes(balgurukul.bg_id)
  const isSpoc = session?.user.spoc.includes(balgurukul.bg_id)
  const isAdmin = session?.user.isAdmin
  const isTeacher = session?.user.teacher.includes(balgurukul.bg_id)
  const bgDelete = async (bg_id) => {
    const res = await fetch(`${baseUrl}/api/balgurukul/delete`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bg_id
      })
    })

    const res2 = await res.json()
    if (res2.error) {
      console.log(res2.error)
    } else {
      console.log("Success")
    }
  }



  // --------------individual page design begins here-----------------
  return (
    <>
      <CustomModal show={openModal} onClose={() => { setOpenModal(false) }} top='10%' left='30%'>
        <h1>Do you really want to delete this Balgurukul?</h1>
        <h1>If you want to undo this action later contact Admin</h1>
        <button className='delete' onClick={() => bgDelete(balgurukul.bg_id)}>Delete</button>
        <button className='cancel' onClick={() => setOpenModal(false)}>Cancel</button>

      </CustomModal>
      <CustomModal show={openModalGrade} onClose={() => { setOpenModalGrade(false) }} top='10%' left='30%'>
          <div className='bg-blue-600 flex flex-col justify-center text-center h-20 text-white font-extrabold px-2'>
            <h1 className='m-auto text-5xl text-white font-extrabold'>Grade Students</h1>
            <h2 className='m-auto text-3xl text-white font-extrabold'>Examination</h2>
          </div>
        <div className="p-5 text-center pt-2">

          <div className='px-5 pt-5'>
            <input type="text" className='bg-white border-2 h-10 w-100 text-2xl text-center font-bold' placeholder='Exam' id="exam" value={exam} onChange={(e) => setExam(e.target.value)} />
          </div>
          <div className='grid grid-cols-2 p-5 pb-1'>
            <button className='btn btn-primary  m-2 text-2xl' disabled={ exam == '' } onClick={() => { (exam == '') ? alert("Exam cannot be empty") : router.push(`/grade/create/${balgurukul.bg_id}/${exam}`) }}>Proceed</button>
            <button className='btn btn-primary  m-2 text-2xl' onClick={() => setOpenModalGrade(false)}>Cancel</button>
          </div>
        </div>
      </CustomModal>
      <div className='bg-blue-600 flex justify-center text-center h-60'>
        <span className='m-auto text-5xl text-white font-extrabold'>{balgurukul.bg_name}</span>
      </div>

      <div className='mb-40 flex justify-center flex-row mx-40' >
        <div className='ml-auto mt-2 pt-12 pr-12 w-auto justify-start flex flex-col h-auto'>


          {/* HOD */}
          <div className='mx-auto w-full h-auto mt-1 mb-5 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-xl shadow-slate-700 rounded-xl'>
            <div className='m-auto py-2'>
              <span className=' text-xl text-white font-semibold roun'>HOD</span>
            </div>
            <div className='flex flex-col m-auto'>
              {balgurukul.hod_users?.map((user, i) =>
                <Link key={i} href={`/profile/user/${user.user_id}`} className=' pl-7 py-3/2 text-xl text-white font-semibold'>
                  {user.title} {user.f_name} {user.l_name}
                </Link>)}
            </div>
            {isAdmin ?
              <div className='m-auto py-2'>
                <Manage user='hod' users={balgurukul.hod_users} users_list={users_list} bg_id={balgurukul.bg_id} ></Manage>
              </div>
              : <></>
            }
          </div>


          {/* SPOC */}
          <div className='mx-auto w-full h-auto mt-1 mb-5 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-xl shadow-slate-700 rounded-xl'>
            <div className='m-auto py-2'>
              <span className=' text-xl text-white font-semibold roun'>SPOC</span>
            </div>
            <div className='flex flex-col m-auto'>
              {balgurukul.spoc_users?.map((user, i) =>
                <Link href={`/profile/user/${user.user_id}`} key={i} className=' pl-7 py-1 text-xl text-white font-semibold'>
                  {user.title} {user.f_name} {user.l_name}
                </Link>)}
            </div>
            {isAdmin || isHod ?
              <div className='m-auto py-2'>
                <Manage user='spoc' users={balgurukul.spoc_users} users_list={users_list} bg_id={balgurukul.bg_id}></Manage>
              </div>
              : <></>
            }
          </div>


          {/* Teacher */}
          <div className='mx-auto w-full h-auto mt-1 mb-5 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-xl shadow-slate-700 rounded-xl'>
            <div className='m-auto py-2'>
              <span className=' text-xl text-white font-semibold roun'>Teachers</span>
            </div>
            <div className='flex flex-col m-auto'>
              {balgurukul.teacher_users?.map((user, i) =>
                <Link href={`/profile/user/${user.user_id}`} key={i} className='pl-7 py-3/2 text-xl text-white font-semibold'>
                  {user.title} {user.f_name} {user.l_name}
                </Link>)}
            </div>
            {isAdmin || isHod ?
              <div className='m-auto py-2'>
                <Manage user='teacher' users={balgurukul.teacher_users} users_list={users_list} bg_id={balgurukul.bg_id}></Manage>
              </div>
              : <></>
            }
          </div>

        </div>


        <div className='mr-auto w-auto pt-12 pl-12 flex flex-col justify-center items-start text-slate-900 text-xl'>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-xl font-bold text-blue-600  mt-auto mb-3'>Partnering Organization</h3>
            <span className='mt-auto mb-2'>{balgurukul.partnering_org}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-xl font-bold text-blue-600  mt-auto mb-3'>Address</h3>
            <span className='mt-auto mb-2'>{balgurukul.address}</span>
            <span className='mt-auto mb-2'>{balgurukul.district}</span>
            <span className='mt-auto mb-2'>{balgurukul.state}</span>
            <span className='mt-auto mb-2'>{balgurukul.pincode}</span>
          </div>
          <div className=' my-auto w-auto flex flex-col items-start justify-between p-2'>
            <h3 className='text-xl font-bold text-blue-600  mt-auto mb-3'>Management</h3>
            <span className='mt-auto mb-2'>{balgurukul.org_under_bg == "nan" ? <span></span> : balgurukul.org_under_bg}</span>
            <span className='mt-auto mb-2'>{balgurukul.phone == "nan" ? <span></span> : balgurukul.phone}</span>
            <span className='mt-auto mb-2'>{balgurukul.mail == "nan" ? <span></span> : 'Email: ' + balgurukul.mail}</span>
          </div>


          <div className=' my-auto p-2 mr-auto w-auto pt-12 pl-12 flex flex-col justify-center items-start text-slate-900 text-xl'>
            <h3 className='text-xl font-bold text-blue-600  mt-auto mb-3'>Students</h3>
            <table className="table-auto">
              <thead className="text-lg">
                <tr className="bg-gray-300 text-gray-700">
                  <th className="px-4 py-2">Student Name</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Date Of Birth</th>
                  <th className="px-4 py-2">Gender</th>
                </tr>
              </thead>

              <tbody>
                {students?.map((std) => {
                  return (
                    <tr key={std.student_id} className="bg-white text-gray-700">
                      <td className="border px-4 py-2"><Link href={`/profile/student/${std.student_id}`} >{`${std.f_name} ${std.m_name} ${std.l_name}`}</Link></td>
                      <td className="border px-4 py-2">{std.grade}</td>
                      <td className="border px-4 py-2">{std.dob}</td>
                      <td className="border px-4 py-2">{std.gender}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {isAdmin ? <button className='delete m-2' onClick={() => setOpenModal(true)}>Delete</button> : <></>}
          {(isAdmin || isHod || isTeacher) ? <button className='btn btn-primary  m-2' onClick={() => setOpenModalGrade(true)}>Grade</button> : <></>}
          {(isAdmin || isHod) ? <Link href={`update/${balgurukul.bg_id}`} as={`update/${balgurukul.bg_id}`} className="btn btn-primary  m-2">Update this Balgurukul</Link> : <></>}

        </div>
      </div>

      {/* <AdminButtons modal={setOpenModal} bg_id={balgurukul.bg_id}></AdminButtons> */}
    </>
  )
}

//--------------------------get all the data from api of that bgk------------------
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/balgurukul/${id}`)
  const stdnt = await fetch(`${baseUrl}/api/student/bg/${id}`)
  const users_list = await fetch(`${baseUrl}/api/user/users`)
  const data = await res.json()
  const stdn = await stdnt.json()
  return {
    props: {
      balgurukul: data,
      students: stdn,
      users_list: await users_list.json()
    },
  }
}

export default Product