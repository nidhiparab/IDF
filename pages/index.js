
const Home =({bgk})=>{
  console.log(bgk)

  const bgkList = bgk.map(bgkk=>{
    return(
      <div className="card" key={bgkk.id} >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{bgkk.name}</h5>
    <p className="card-text">{bgkk.location}</p>
    <a href="#" className="btn btn-primary">Know More</a>
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