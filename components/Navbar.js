import Link from 'next/link'

const Navbar=()=>{
    return(
      <section className='Header' >
<nav className='navbar navbar-expand-lg navbar-custom'>
  <div class="container-fluid" >
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" href="/" >Home</Link>
        <Link class="nav-link active" aria-current="page" href="/balgurukul" >Balgurukuls</Link>
        <Link class="nav-link active" aria-current="page" href="/balgurukul/create" >Create</Link>
      </div>
    </div>
  </div>
</nav>
      </section>
        
    )
}
export default Navbar
