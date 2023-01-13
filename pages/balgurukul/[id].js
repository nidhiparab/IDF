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
      <div className='bg-blue-600 flex justify-center text-center h-60'>
        <span className='m-auto text-5xl text-white font-extrabold'>{balgurukul.bg_name}</span>
      </div>

      <div className= 'mb-40 flex justify-center ' >
        <div className='ml-8 mt-3 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 w-1/3 h-2/3 shadow-2xl shadow-slate-700 rounded-2xl'>
         <div className='m-auto '>
            <span className=' text-2xl text-white font-semibold roun'>HOD</span>
         </div>
         <br/>
          <div className='m-auto'>
            <span className='text-2xl bg-slate-200 rounded-full font-bold mt-100 p-2 text-sm'>Manage</span>
          </div>
        </div>
      
          <div className='m-auto w-4/5'>
            <div className='ml-8  mt-auto p-4'>
            <h3 className='font-bold'>Partnering Organisation</h3>
              <div >{balgurukul.partnering_org}</div>
              <br/>
              <br/>
              <h3 className='font-bold'>Address</h3>
              <div >{balgurukul.address}</div>
              <div >{balgurukul.district}</div>
              <div >{balgurukul.state}</div>
              <div >{balgurukul.pincode}</div>
              <br/>
              <br/>
              <h3 className='font-bold'>Management Information</h3>
              <div >HOD name</div>
              <div >HOD email</div>
              <div >HOD phone</div>
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
    props: { balgurukul: data,
    hod:data.hod_users
    },
  }
}

export default Product