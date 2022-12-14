import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div className=" navbar navbar-expand-lg navbar-light row ">
					<div className="col col-lg-2">
						<div className="navbar-brand row">
							<Link className=" col" href="https://www.idf.org.in">
								<Image
									src="https://static.wixstatic.com/media/d3cf27_7565cf50f68f4fe2858ef7f67371d7aa~mv2.png/v1/fill/w_46,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/idf-logo.png"
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
						<div class="navbar-nav">
							<Link class="nav-link" aria-current="page" href="../">
								Home
							</Link>
							<Link class="nav-link" href="../balgurukul">
								Balgurukuls
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
