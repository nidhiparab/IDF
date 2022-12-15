import Link from 'next/link';
import Create from '../pages/balgurukul/create'
import Image from 'next/image';
import logo from '../public/images/idf-logo.png'

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div className=" navbar navbar-expand-lg navbar-light row ">
					<div className="col col-lg-2">
						<div className="navbar-brand row">
							<Link className=" col" href="https://www.idf.org.in">
								<Image
									src={logo}
									alt="idf-logo.png"
								/>
							</Link>
							<div className=" col col-lg-2">
								<h1 className="row ">Indian Development Foundation</h1>
								<p className="row nav-text">
									A National NGO committed to Health, Education, and Development
								</p>
								<p className="row nav-text">
									IDF - Organization in Special Consultative Status with the Economic and Social
									Council since 2012.
								</p>
							</div>
						</div>
						<div className="navbar-nav">
							<a className="nav-link" aria-current="page" href="../">
								Home
							</a>
							<a className="nav-link" href="../balgurukul">
								Balgurukuls
							</a>
							<a className="nav-link" href="../balgurukul/create" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New Balgurukul">
								Create
							</a>
							<a className="nav-link" href="https://indiandevelopmentfoundation.blogspot.com/" >
								Blog
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
