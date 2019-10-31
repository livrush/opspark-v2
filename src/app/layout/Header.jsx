import { h } from 'preact';
import { Link } from 'preact-router/match';
import * as links from '../../copy/links.json';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link href="/">
                <img
                  className="nav-logo"
                  src="../assets/lockup-yellow-white.svg"
                  alt="Operation Spark"
                  srcset=""
                />
              </Link>
            </div>
            <div className="col-2">
              <Link className="link" href="/about">
                About
              </Link>
            </div>
            <div className="col-2">
              <Link className="link" href="/programs">
                Programs
              </Link>
            </div>
            <div className="col-2">
              <Link className="link alt" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-link-list-container">
        <div className="container">
          <div className="row">
            <ul className="col-6 sub-link-list">
              <li className="sub-link">
                <a className="link" href={links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="sub-link">
                <a className="link" href={links.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li className="sub-link">
                <a className="link" href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="sub-link">
                <a className="link" href={links.github} target="_blank" rel="noopener noreferrer">Github</a>
              </li>
              <li className="sub-link">
                <a className="link" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
            <ul className="col-2 sub-link-list">
              <li className="sub-link">
                <Link className="link" href="/about">History</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/team">Team</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/our-culture">Our Culture</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/awards-and-press">Awards and Press</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/blog">Blog</Link>
              </li>
            </ul>
            <ul className="col-2 sub-link-list">
              <li className="sub-link">
                <Link className="link" href="/adult-workforce">Adult Workforce</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/high-school">High School</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/testimonials">Testimonials</Link>
              </li>
            </ul>
            <ul className="col-2 sub-link-list">
              <li className="sub-link">
                <Link className="link" href="/sign-up">Sign Up</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/hire">Hire Talent</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/volunteer">Volunteer</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/donate">Donate</Link>
              </li>
              <li className="sub-link">
                <Link className="link" href="/recycle">Recycle</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
