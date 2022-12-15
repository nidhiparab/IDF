import Link from 'next/link'
import CustomModal from '../../components/Modals/CustomModal'
import baseUrl from '../../helpers/baseUrl'
import { useState } from 'react'
import Image from 'next/image'


const Product = ({ balgurukul }) => {

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




  // --------------individual page design begins here-----------------
  return (
    <>
      <CustomModal show={openModal} onClose={() => { setOpenModal(false) }} top='10%' left='30%'>
        <h1>Do you really want to delete this Balgurukul?</h1>
        <h1>If you want to undo this action later contact Admin</h1>
        <button className='delete' onClick={() => bgDelete(balgurukul.bg_id)}>Delete</button>
        <button className='cancel' onClick={() => setOpenModal(false)}>Cancel</button>

      </CustomModal>
      <div className="container_id ">
        <h1 className='name'>{balgurukul.bg_name}</h1><br />
        <h5 className='org '>Partnering Organization: {balgurukul.partnering_org}</h5><br />
        <div className="row">
          <div className="col">
            
          </div>
          <div className="">
          <h5 className='adr'>Address</h5>
        {balgurukul.address}<br />
        {balgurukul.district}<br />
        {balgurukul.state}<br />
        {balgurukul.pincode}<br /><br />
          </div>
        </div>

        <h5 className='adr'>Management</h5>
        {balgurukul.org_under_bg == "nan" ? '-' : balgurukul.org_under_bg}<br />
        {balgurukul.phone == "nan" ? '-' : balgurukul.phone}<br />
        Email: {balgurukul.mail == "nan" ? '---' : balgurukul.mail}<br />
        <button className='delete' onClick={() => setOpenModal(true)}>Delete</button>
      </div>
    </>
  )
}

//--------------------------get all the data from api of that bgk------------------
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${baseUrl}/api/balgurukul/${id}`)
  const data = await res.json()
  console.log(data)
  return {
    props: { balgurukul: data[0] },
  }
}

export default Product