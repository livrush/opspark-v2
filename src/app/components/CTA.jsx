import { h } from 'preact';
import { Link } from 'preact-router/match';

const CTA = ({ actionText, buttonText, buttonLink }) => (
  <div className="call-to-action">
    <div className="cta-halle-bg"></div>
    <div className="row">
      <div className="col-6 flex-col-center">
        <h3 className="h3">{actionText}</h3>
        <Link className="btn alt" href={buttonLink}>{buttonText}</Link>
      </div>
    </div>
  </div>
);

export default CTA;
