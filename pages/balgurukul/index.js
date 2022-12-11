import Link from 'next/link'
import baseUrl from "../../helpers/baseUrl"

export default function bg({bgk}) {

  const bgkList = bgk.map(bgkk => {
    return (
      <div className="card" key={bgkk.bg_id} >
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className="card-title">{bgkk.bg_name}</h5>
          <p className="card-text">{bgkk.state}</p>

          <Link href={'/balgurukul/[id]'} as={`/balgurukul/${bgkk.bg_id}`} className="btn btn-primary">Know More</Link>
        </div>
      </div>
    )
  })
  return (
    <div className="rootcard">
      {bgkList}
    </div>
  )
}

export async function getStaticProps() {
  let res = await fetch( baseUrl + "/api/balgurukul")
  const data = await res.json();
  console.log(data)
  return {
    props: {
      bgk:data
    }
  }
}