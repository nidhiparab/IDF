import React from 'react'
import Link from 'next/link'

export default function AdminButtons({ modal, bg_id }) {
  return (
    <>
      <button className='delete' onClick={() => modal(true)}>Delete</button>
      <Link href={'update/[id]'} as={`update/${bg_id}`} className="btn btn-primary">Update this page</Link>
    </>
  )
}
