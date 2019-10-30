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
            <Link className="link" href="/adult-workforce">
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
            <Link className="link" href={links.facebook}>
              Facebook
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href={links.twitter}>
              Twitter
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href={links.instagram}>
              Instagram
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href={links.github}>
              Github
            </Link>
          </li>
          <li className="sub-link">
            <Link className="link" href={links.linkedin}>
              LinkedIn
            </Link>
          </li>
        </ul>
        <div className="col-4">
          <p className="footer-paragraph paragraph alt">Join our mailing list</p>
          <form action="">
            <input type="text" />
            <button>Submit</button>
          </form>
          <p className="paragraph sub-text">
            Operation Spark is a 501(c)(3)&nbsp;
            <p className="paragraph alt">not-for-profit</p>
          </p>
        </div>
        <div className="col-12">
          <p className="paragraph alt">Our Wonderful Supporters</p>
          <div className="footer-logo-container">
            <img className="footer-logo" src="../assets/logos/WKKF.png" alt="W.K. Kellog Foundation" />
            <img className="footer-logo" src="../assets/logos/entergy.png" alt="Entergy" />
            <img className="footer-logo" src="../assets/logos/capital-one.png" alt="Capital One" />
            <img className="footer-logo" src="../assets/logos/google.png" alt="Google" />
            <img className="footer-logo" src="../assets/logos/att.png" alt="AT&T" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Header;
