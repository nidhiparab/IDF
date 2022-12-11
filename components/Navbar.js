import Link from 'next/link'

const Navbar=()=>{
    return(
      <section className='Header' >
<nav className='navbar navbar-expand-lg navbar-custom'>
  <div class="container-fluid" >
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="../">Home</a>
        <a class="nav-link active" aria-current="page" href="../balgurukul">Balgurukuls</a>
        <a class="nav-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
      </section>
        
    )
}
export default Navbar
