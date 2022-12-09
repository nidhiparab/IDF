import Link from 'next/link'
import baseUrl from '../helpers/baseUrl'
// import executeQuery from '../config/db'

const Home =({bgk})=>{
  console.log(bgk)

  // let result = await executeQuery({
  //   query:'select * from test',
  //   values:[]
  // })
  // console.log(result)

  const bgkList = bgk.map(bgkk=>{
    return(
      <div className="card" key={bgkk.id} >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{bgkk.name}</h5>
    <p className="card-text">{bgkk.location}</p>
    
    <Link href={'/balgurukul/[id]'} as={`/balgurukul/${bgkk.id}`} className="btn btn-primary">Know More</Link>
  </div>
</div>
    )
  })
  return(
    <div className="rootcard">
      {bgkList}
    </div>
  )
}

export async function getStaticProps(){
  const data = [
    {
      id:1,
      name:"BGK 1",
      location:"mumbai"
    },
    {
      id:2,
      name:"BGK 2",
      location:"pune"
    }
  ]

  return{
    props:{
      bgk:data
    }
  }
}

export default Home;