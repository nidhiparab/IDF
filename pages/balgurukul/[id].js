import Link from 'next/link'
import CustomModal from '../../components/Modals/CustomModal'
import baseUrl from '../../helpers/baseUrl'
import { useState } from 'react'
import styles from '../../styles/Balgurukul.module.css'
import Image from 'next/image'
import AdminButtons from '../../components/Admin/balgurukul/info'
import { useSession } from "next-auth/react"

const Product = ({ balgurukul }) => {
  const { data: session } = useSession()
  const [openModal, setOpenModal] = useState(false)

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
  console.log(session);
  console.log(`Is HoD ${session?.user.hod.includes(balgurukul.bg_id)}`);



  // --------------individual page design begins here-----------------
  return (
    <>
      <CustomModal show={openModal} onClose={() => { setOpenModal(false) }} top='10%' left='30%'>
        <h1>Do you really want to delete this Balgurukul?</h1>
        <h1>If you want to undo this action later contact Admin</h1>
        <button className='delete' onClick={() => bgDelete(balgurukul.bg_id)}>Delete</button>
        <button className='cancel' onClick={() => setOpenModal(false)}>Cancel</button>

      </CustomModal>
      <div className='bg-blue-300 flex justify-center text-center p-10'>
        <span className='m-auto text-5xl text-white font-extrabold'>{balgurukul.bg_name}</span>
      </div>

      <div className={` flex flex-row space-x-2 bg-slate-400 mx-10 `}>
        <div className='m-auto'>
          <div className='flex flex-col space-x-2 bg-slate-300'>
            <div className='m-auto flex flex-col space-x-2  bg-slate-200'>
              <div className='m-auto'>
                <span className='text-2xl text-blue-300 font-medium roun'>H.O.D</span>
              </div>
              <div className='m-auto'>
                <span className='text-2xl text-blue-300 font-medium'>Manage</span>
              </div>
            </div>
          </div>
        </div>
        <div className='m-auto'>
          <div className='flex flex-row space-x-2 bg-slate-100'>
            <div className='m-auto p-4'>
              <span className='text-3xl text-blue-300 font-medium'>{balgurukul.partnering_org}</span>
            </div>
          </div>
        </div>

      </div>

      {/* <AdminButtons modal={setOpenModal} bg_id={balgurukul.bg_id}></AdminButtons> */}
    </>
  )
}

//--------------------------get all the data from api of that bgk------------------
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/balgurukul/${id}`)
  const data = await res.json()
  console.log(data);
  return {
    props: { balgurukul: data },
  }
}

export default Product