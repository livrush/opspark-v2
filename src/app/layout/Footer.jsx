import 'lazysizes';
import { h } from 'preact';
import { Link } from 'preact-router/match';
import * as links from '../../copy/links.json';

const Header = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <ul className="col-2 sub-link-list">
          <li className="sub-link">
            <Link className="link alt" href="/about">
              About
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/about">
              History
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/team">
              Team
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/our-culture">
              Our Culture
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/awards-and-press">
              Awards and Press
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="col-2 sub-link-list">
          <li className="sub-link">
            <Link className="link alt" href="/programs">
              Programs
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/workforce">
              Adult Workforce
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/high-school">
              High School
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/testimonials">
              Testimonials
            </Link>
          </li>
        </ul>
        <ul className="col-2 sub-link-list">
          <li className="sub-link">
            <Link className="link alt" href="/contact">
              Contact
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/sign-up">
              Sign Up
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/hire">
              Hire Talent
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/volunteer">
              Volunteer
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/donate">
              Donate
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href="/recycle">
              Recycle
            </Link>
          </li>
        </ul>
        <ul className="col-2 sub-link-list">
          <li className="sub-link">
            <Link className="link alt" href="/follow-us">
              Follow Us
            </Link>
          </li>
          <li className="sub-link">
            <a className="link" href={links.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li className="sub-link">
            <a className="link" href={links.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li className="sub-link">
            <a className="link" href={links.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li className="sub-link">
            <a className="link" href={links.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li className="sub-link">
            <a className="link" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="col-4">
          <p className="footer-paragraph paragraph alt">Join our mailing list</p>
          <form action="" className="flex">
            <input type="email" className="input-box" placeholder="Enter your email" />
            <button className="input-button">Submit</button>
          </form>
          <p className="paragraph sub-text">
            Operation Spark is a 501(c)(3)&nbsp;
            <span className="paragraph alt">not-for-profit</span>
          </p>
        </div>
        <div className="col-12">
          <p className="paragraph alt">Our Wonderful Supporters</p>
          <div className="footer-logo-container">
            <img className="footer-logo lazyload" data-src="../assets/logos/wkkf.gif" alt="W.K. Kellog Foundation" />
            <img className="footer-logo lazyload" data-src="../assets/logos/entergy.gif" alt="Entergy" />
            <img className="footer-logo lazyload" data-src="../assets/logos/capital-one.gif" alt="Capital One" />
            <img className="footer-logo lazyload" data-src="../assets/logos/google.gif" alt="Google" />
            <img className="footer-logo lazyload" data-src="../assets/logos/att.gif" alt="AT&T" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Header;
