import { h } from 'preact';
import { Link } from 'preact-router/match';
import Polygon from '../components/Polygon';
import { address, contact } from '../../copy/info';

const Contact = () => (
  <div className="page container home">
    <Polygon backgroundImage="code">
      <h1 className="h1">Contact Us</h1>
    </Polygon>
    <div className="row text-container">
      <div className="row flex-row-center">
        <div className="col-4">
          <p className="paragraph">
            If you'd like to find out more about our programs please sign up to
            attend a free info session by clicking here and signing up.
          </p>
          <p className="paragraph alt">Address</p>
          <p className="paragraph">
            <a
              className="link"
              href="https://www.google.com/maps/place/Operation+Spark/@29.9776876,-90.0823041,17z/data=!3m1!4b1!4m5!3m4!1s0x8620a674082187ed:0x4a137f933d04c062!8m2!3d29.9776876!4d-90.0801154"
              target="_blank"
              rel="noopener noreferrer"
            >
              {address.street1}
              <br />
              {address.street2}
              <br />
              {address.city}, {address.state} {address.zip}
            </a>
          </p>
          <p className="paragraph alt">Phone</p>
          <p className="paragraph">
            <a className="link" href={`tel:206.713.6452`}>
              {/* <a href={`tel:${contact.phone}`}> */}
              {contact.phone}
            </a>
          </p>
          <p className="paragraph alt">Email</p>
          <p className="paragraph">
            <a className="link" href={`mailto:${contact.email.admissions}`}>
              {contact.email.admissions}
            </a>
          </p>
        </div>
        <div className="col-6">
          <a
            className="link"
            href="https://www.google.com/maps/place/Operation+Spark/@29.9776876,-90.0823041,17z/data=!3m1!4b1!4m5!3m4!1s0x8620a674082187ed:0x4a137f933d04c062!8m2!3d29.9776876!4d-90.0801154"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../assets/map.svg" alt="" />
          </a>
        </div>
      </div>
      <h2 className="h2">Say Hello</h2>
      <div className="row flex-col-center">
        <div className="col-10">
          <p className="paragraph">
            If you would like to join us for an info session&nbsp;
            <Link href="/sign-up" className="link alt">
              please use our sign up form.
            </Link>
            &nbsp;If you would like to contact us for something else feel free to submit your feedback in the form below and we will get back to you as soon as we can.
          </p>
          <form class="" action="">
            {/* <div className="row"> */}
              <div className="col-3 flex-col">
                <label className="paragraph alt" htmlFor="name">First Name</label>
                <input type="text" className="input-box" required/>
              </div>
              <div className="col-3 flex-col">
                <label className="paragraph alt" htmlFor="name">Last Name</label>
                <input type="text" className="input-box" required/>
              </div>
              <div className="col-4 flex-col">
                <label className="paragraph alt" htmlFor="name">Email</label>
                <input type="text" className="input-box" required/>
              </div>
              <div className="col-10 flex-col">
                <label className="paragraph alt" htmlFor="name">Comments</label>
                <textarea name="" id="" cols="30" rows="10" className="input-box"></textarea>
              </div>
              <div className="col-10">
                <button className="btn">Submit</button>
              </div>
            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
