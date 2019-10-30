import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header className="header">
		<nav className="container">
			<div className="row nav-bar">
				<div className="col-6">
					<img className="nav-logo" src="../assets/lockup-yellow-white.svg" alt="Operation Spark" srcset=""/>
				</div>
				<div className="col-2">
					<Link className="link" href="/about">About</Link>
				</div>
				<div className="col-2">
					<Link className="link" href="/programs">Programs</Link>
				</div>
				<div className="col-2">
					<Link className="link alt" href="/contact">Contact</Link>
				</div>
			</div>
			<div className="row sub-link-list-container">
				<ul className="col-6 sub-link-list">
					<li className="sub-link">
						<Link className="link">Facebook</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Twitter</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Instagram</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Github</Link>
					</li>
					<li className="sub-link">
						<Link className="link">LinkedIn</Link>
					</li>
				</ul>
				<ul className="col-2 sub-link-list">
					<li className="sub-link">
						<Link className="link">History</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Team</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Our Culture</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Awards and Press</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Blog</Link>
					</li>
				</ul>
				<ul className="col-2 sub-link-list">
					<li className="sub-link">
						<Link className="link">Adult Workforce</Link>
					</li>
					<li className="sub-link">
						<Link className="link">High School</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Testimonials</Link>
					</li>
				</ul>
				<ul className="col-2 sub-link-list">
					<li className="sub-link">
						<Link className="link">Sign Up</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Hire Talent</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Volunteer</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Donate</Link>
					</li>
					<li className="sub-link">
						<Link className="link">Recycle</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Header;
