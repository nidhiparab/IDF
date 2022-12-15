import Link from 'next/link';
import Create from '../pages/balgurukul/create'

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div className=" navbar navbar-expand-lg navbar-light row ">
					<div className="col col-lg-2">
						<div className="navbar-brand row">
							<a className=" col" href="https://www.idf.org.in">
								<img
									src="https://static.wixstatic.com/media/d3cf27_7565cf50f68f4fe2858ef7f67371d7aa~mv2.png/v1/fill/w_46,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/idf-logo.png"
									alt="idf-logo.png"
								/>
							</a>
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
