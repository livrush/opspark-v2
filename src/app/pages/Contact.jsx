import { h } from 'preact';
import Polygon from '../components/Polygon';
import { address, contact } from '../../copy/info';

const Contact = () => (
  <div className="page container home">
    <Polygon backgroundImage="code">
      <h1 className="h1">Contact Us</h1>
    </Polygon>
    <div className="row text-container">
      <div className="row">
        <div className="col-3">
          <p className="paragraph">
            If you'd like to find out more about our programs please sign up to
            attend a free info session by clicking here and signing up.
          </p>
          <p className="paragraph alt">Address</p>
          <p className="paragraph">
            <a
              href="https://www.google.com/maps/place/Operation+Spark/@29.9776876,-90.0823041,17z/data=!3m1!4b1!4m5!3m4!1s0x8620a674082187ed:0x4a137f933d04c062!8m2!3d29.9776876!4d-90.0801154"
              target="_blank"
              rel="noopener noreferrer"
            >
              {address.street1}
            </a>
            <br />
            {address.street2}
            <br />
            {address.city}, {address.state} {address.zip}
          </p>
          <p className="paragraph alt">Phone</p>
          <p className="paragraph">
            <a href={`tel:206.713.6452`}>
              {/* <a href={`tel:${contact.phone}`}> */}
              {contact.phone}
            </a>
          </p>
          <p className="paragraph alt">Email</p>
          <p className="paragraph">
            <a href={`mailto:${contact.email.admissions}`}>
              {contact.email.admissions}
            </a>
          </p>
        </div>
        <div className="col-9">
          <img src="../../assets/map.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
